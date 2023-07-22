import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  DECREASE_INGREDIENT_COUNT,
  RESET_COUNTS,
  INCREASE_BUN_COUNT,
  INCREASE_INGREDIENT_COUNT
} from "../actions/burger-ingredients";
import type { TBurgerIngredientsActions } from "../actions/burger-ingredients";

import { IElement } from '../../utils/types';

type TInitialState = {
  ingredients: IElement[];
  isRequest: boolean;
  isRequestError: boolean;
}
const initialState: TInitialState = {
  ingredients: [],
  isRequest: false,
  isRequestError: false
}
export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TInitialState => {
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
    case INCREASE_INGREDIENT_COUNT: {
      //?передавать не целиком элемент, а только _id. Либо вообще вынести логику из редьюсера в элемент или экшен?
      const countedIngredients = state.ingredients
        .map((item: IElement) => {
          if (item._id === action.item._id) item.count = item.count + 1;
          return item
        })

      return {
        ...state,
        ingredients: countedIngredients
      }
    }
    case INCREASE_BUN_COUNT: {

      const countedBuns = state.ingredients
        .map((item: IElement) => {
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

    case DECREASE_INGREDIENT_COUNT: {

      const countedIngredients = state.ingredients
        .map((item: IElement) => {
          if (item._id === action.item._id) item.count = item.count - 1;
          return item
        })

      return {
        ...state,
        ingredients: countedIngredients
      }
    }
    case RESET_COUNTS: {

      const cleanIngredients = [...state.ingredients]
        .map((item: IElement) => {
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