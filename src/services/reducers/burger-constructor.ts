import {
  ADD_INGREDIENT,
  ADD_BUNS,
  UPDATE_INGREDIENTS_ORDER,
  DELETE_INGREDIENT,
  CONSTRUCTOR_INIT,
  TBurgerConstructorActions
} from "../actions/burger-constructor"
import { IElement } from '../../utils/types';


export type TInitialState = {
  buns: IElement | null,
  ingredients: IElement[],
}

export const initialState: TInitialState = {
  buns: null,
  ingredients: [],
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TInitialState => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.item
        ],
      }
    }
    case ADD_BUNS: {
      if (state.buns !== null) {
        return {
          ...state,
          buns: action.item,
        }
      } else {
        return {
          ...state,
          buns: action.item,
        }
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
      }
    }
    case CONSTRUCTOR_INIT: {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
};
export default burgerConstructorReducer;