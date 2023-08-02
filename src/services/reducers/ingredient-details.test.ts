import reducer from './ingredient-details';
import {
  GET_INGREDIENT_INFO,
  CLOSE_DETAILS,
  TIngredientDetailsActions
} from "../actions/ingredient-details";
import { MockIngredientDetails } from '../../utils/mock-data';

describe('test ingredient-details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TIngredientDetailsActions)).toEqual({
      ingredient: null,
      isShowDetails: false
    })
  });
  it('should handle GET_INGREDIENT_INFO', () => {
    expect(reducer({
      ingredient: null,
      isShowDetails: false
    }, {
      type: GET_INGREDIENT_INFO,
      payload: MockIngredientDetails
    })).toEqual({
      ingredient: MockIngredientDetails,
      isShowDetails: true
    })
  });
  it('should handle CLOSE_DETAILS', () => {
    expect(reducer({
      ingredient: MockIngredientDetails,
      isShowDetails: true
    }, {
      type: CLOSE_DETAILS
    })).toEqual({
      ingredient: null,
      isShowDetails: false
    })
  });
})
