import reducer from './burger-constructor';
import {
  ADD_INGREDIENT,
  ADD_BUNS,
  UPDATE_INGREDIENTS_ORDER,
  DELETE_INGREDIENT,
  CONSTRUCTOR_INIT,
  TBurgerConstructorActions
} from "../actions/burger-constructor"
import {
  MockAddBuns,
  MockConstructorIngredient,
  MockConstructorIngredientsUpdated,
  MockConstructorIngredientsDeleteOne,
  filledConstructor
} from '../../utils/mock-data';
import { initialState } from './burger-constructor';

describe('test burger-constructor reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TBurgerConstructorActions)).toEqual(initialState)
  });
  it('should handle ADD_INGREDIENT', () => {
    expect(reducer(filledConstructor, {
      type: ADD_INGREDIENT,
      item: MockConstructorIngredient
    })).toEqual({
      ...filledConstructor,
      ingredients: [...filledConstructor.ingredients, MockConstructorIngredient]
    })
  });
  it('should handle ADD_BUNS', () => {
    expect(reducer(filledConstructor, {
      type: ADD_BUNS,
      item: MockAddBuns
    })).toEqual({
      ...filledConstructor,
      buns: MockAddBuns
    })
  });
  it('should handle UPDATE_INGREDIENTS_ORDER', () => {
    expect(reducer(filledConstructor, {
      type: UPDATE_INGREDIENTS_ORDER,
      payload: MockConstructorIngredientsUpdated
    })).toEqual({
      ...filledConstructor,
      ingredients: MockConstructorIngredientsUpdated
    })
  });
  it('should handle DELETE_INGREDIENT', () => {
    expect(reducer(filledConstructor, {
      type: DELETE_INGREDIENT,
      payload: MockConstructorIngredientsDeleteOne,
      item: MockConstructorIngredient
    })).toEqual({
      ...filledConstructor,
      ingredients: MockConstructorIngredientsDeleteOne
    })
  })
  it('should handle CONSTRUCTOR_INIT', () => {
    expect(reducer(filledConstructor, {
      type: CONSTRUCTOR_INIT
    })).toEqual(initialState)
  });
});