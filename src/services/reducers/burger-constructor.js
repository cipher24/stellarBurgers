import { RANDOM, ADD_INGREDIENT, ADD_BUNS, UPDATE_INGREDIENTS_ORDER, DELETE_INGREDIENT } from "../actions/burger-constructor"
import { POST_SUCCESS } from '../actions/order-details';
const initialState = {
  buns: {},
  ingredients: [],
  total: 0
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM: {
      return {
        ...state,
        buns: action.payload.upperBun,
        ingredients: action.payload.ingredients,
        total: action.payload.total
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.item
        ],
        total: state.total + action.item.price
      }
    }
    case ADD_BUNS: {
      return {
        ...state,
        total: state.buns.price ? (
          state.total - state.buns.price * 2 + action.item.price * 2
        ) : (
          state.total + action.item.price * 2
          ),
        buns: action.item,
      }
    }
    case UPDATE_INGREDIENTS_ORDER: {
      return {
        ...state,
        ingredients: action.payload
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: action.payload,
        total: state.total - action.item.price
      }
    }
    case POST_SUCCESS: {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
}