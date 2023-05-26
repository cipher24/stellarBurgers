//типы экшенов
import { GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
   GET_INGREDIENTS_ERROR  } from "../actions/burger-ingredients";

const initialState = {
  ingredients: [],
  isRequest: false,
  isRequestError: false
}

export const burgerIngredientsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isRequest: true,
        isRequestError: false
      }
    }
    case GET_INGREDIENTS_SUCCESS : {
      return {
        ...state,
        isRequest: false,
        isRequestError: false,
        ingredients: action.ingredients
      }
    }
    case GET_INGREDIENTS_ERROR : {
        return {
          ...state,
          isRequest: false,
          isRequestError: true
        }
    }
    default: {
      return state 
    }
  }
}