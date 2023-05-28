import {
  ADD_INGREDIENT,
  ADD_BUNS,
  DELETE_INGREDIENT
} from "../actions/burger-constructor";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
} from "../actions/burger-ingredients";
import { POST_SUCCESS } from "../actions/order-details";
const initialState = {
  ingredients: [],
  isRequest: false,
  isRequestError: false
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isRequest: true,
        isRequestError: false
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isRequest: false,
        isRequestError: false,
        ingredients: action.ingredients
      }
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...initialState,
        isRequest: false,
        isRequestError: true
      }
    }
    case ADD_INGREDIENT: {

      const countedIngredients = state.ingredients
        .map(item => {
          if (item._id === action.item._id) item.count = item.count + 1;
          return item
        })

      return {
        ...state,
        ingredients: countedIngredients
      }
    }
    case ADD_BUNS: {

      const countedBuns = state.ingredients
        .map(item => {
          if (item._id === action.item._id) {
            if (item.count === 0) item.count = item.count + 1
          } else if ((item.type === 'bun') && (item.count !== 0)) item.count = item.count - 1
          return item
        })

      return {
        ...state,
        ingredients: countedBuns
      }
    }

    case DELETE_INGREDIENT: {

      const countedIngredients = state.ingredients
        .map(item => {
          if (item._id === action.item._id) item.count = item.count - 1;
          return item
        })

      return {
        ...state,
        ingredients: countedIngredients
      }
    }
    case POST_SUCCESS: {

      const cleanIngredients = [...state.ingredients]
      .map(item => {
        item.count = 0
        return item  
      });
      
      return {
        ...state,
        ingredients: cleanIngredients
      }
    }
    default: {
      return state
    }
  }
}