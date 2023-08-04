import reducer from './ingredient-details';
import {
  GET_INGREDIENT_INFO,
  CLOSE_DETAILS,
  TIngredientDetailsActions
} from "../actions/ingredient-details";
import { MockIngredientDetails } from '../../utils/mock-data';
import { initialState } from './ingredient-details';

const stateWithIngredient = {
  ...initialState,
  ingredient: MockIngredientDetails,
  isShowDetails: true
}

describe('test ingredient-details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TIngredientDetailsActions)).toEqual(initialState)
  });
  it('should handle GET_INGREDIENT_INFO', () => {
    expect(reducer(initialState, {
      type: GET_INGREDIENT_INFO,
      payload: MockIngredientDetails
    })).toEqual(stateWithIngredient)
  });
  it('should handle CLOSE_DETAILS', () => {
    expect(reducer(stateWithIngredient, {
      type: CLOSE_DETAILS
    })).toEqual(initialState)
  });
})
