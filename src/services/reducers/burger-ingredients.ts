import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  TBurgerIngredientsActions
} from "../actions/burger-ingredients";

import { IElementTemp } from '../../utils/types';

type TInitialState = {
  ingredients: IElementTemp[];
  isRequest: boolean;
  isRequestError: string | null;
}
export const initialState: TInitialState = {
  ingredients: [],
  isRequest: false,
  isRequestError: null
}
export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isRequest: true,
        isRequestError: null
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isRequest: false,
        isRequestError: null,
        ingredients: action.ingredients
      }
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...initialState,
        isRequest: false,
        isRequestError: action.payload
      }
    }
    default: {
      return state
    }
  }
};
export default burgerIngredientsReducer;