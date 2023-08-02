import {
  GET_INGREDIENT_INFO,
  CLOSE_DETAILS,
  TIngredientDetailsActions
} from "../actions/ingredient-details";

import { IElementTemp } from "../../utils/types";

type TInitialState = {
  ingredient: IElementTemp | null;
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
};
export default ingredientDetailsReducer;