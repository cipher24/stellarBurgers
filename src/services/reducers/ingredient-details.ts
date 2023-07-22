import {
  GET_INGREDIENT_INFO,
  CLOSE_DETAILS
} from "../actions/ingredient-details";
import type {TIngredientDetailsActions} from "../actions/ingredient-details";
import { IElement } from "../../utils/types";

type TInitialState = {
  ingredient: IElement | null;
  isShowDetails: boolean;
}
const initialState: TInitialState = {
  ingredient: null,
  isShowDetails: false
}

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions): TInitialState => {
  switch (action.type) {
    case GET_INGREDIENT_INFO: {
      return {
        ...state,
        ingredient: action.payload,
        isShowDetails: true
      }
    }
    case CLOSE_DETAILS: {
      return {
        ...state,
        ingredient: null,
        isShowDetails: false
      }
    }
    default: {
      return state
    }
  }
}