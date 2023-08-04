import reducer from './burger-ingredients';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  TBurgerIngredientsActions
} from "../actions/burger-ingredients";
import { MockBurgerIngredients } from '../../utils/mock-data';
import { initialState } from './burger-ingredients';

describe('test burger-ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TBurgerIngredientsActions)).toEqual(initialState)
  });
  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(reducer(initialState, {
      type: GET_INGREDIENTS_REQUEST
    })).toEqual({
      ...initialState,
      isRequest: true
    })
  });
  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(reducer({
      ...initialState,
      isRequest: true
    }, {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: MockBurgerIngredients
    })).toEqual({
      ...initialState,
      ingredients: MockBurgerIngredients
    })
  });
  it('should handle GET_INGREDIENTS_ERROR', () => {
    expect(reducer(initialState, {
      type: GET_INGREDIENTS_ERROR,
      payload: 'Ошибка доступа'
    })).toEqual({
      ...initialState,
      isRequestError: 'Ошибка доступа'
    })
  });


})