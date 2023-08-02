import reducer from './burger-ingredients';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  TBurgerIngredientsActions
} from "../actions/burger-ingredients";
import { MockBurgerIngredients } from '../../utils/mock-data';

describe('test burger-ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TBurgerIngredientsActions)).toEqual({
      ingredients: [],
      isRequest: false,
      isRequestError: null
    })
  });
  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(reducer({
      ingredients: [],
      isRequest: false,
      isRequestError: null
    }, {
      type: GET_INGREDIENTS_REQUEST
    })).toEqual({
      ingredients: [],
      isRequest: true,
      isRequestError: null
    })
  });
  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(reducer({
      ingredients: [],
      isRequest: false,
      isRequestError: null
    }, {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: MockBurgerIngredients
    })).toEqual({
      ingredients: MockBurgerIngredients,
      isRequest: false,
      isRequestError: null
    })
  });
  it('should handle GET_INGREDIENTS_ERROR', () => {
    expect(reducer({
      ingredients: [],
      isRequest: false,
      isRequestError: null
    }, {
      type: GET_INGREDIENTS_ERROR,
      payload: 'Ошибка доступа'
    })).toEqual({
      ingredients: [],
      isRequest: false,
      isRequestError: 'Ошибка доступа'
    })
  });


})