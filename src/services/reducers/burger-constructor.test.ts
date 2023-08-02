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
  MockConstructorBuns,
  MockConstructorIngredients,
  MockConstructorIngredientsUpdated,
  MockConstructorIngredientsDeleteOne
} from '../../utils/mock-data';

describe('test burger-constructor reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TBurgerConstructorActions)).toEqual({
      buns: null,
      ingredients: []
    })
  });
  it('should handle ADD_INGREDIENT', () => {
    expect(reducer({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredients
    }, {
      type: ADD_INGREDIENT,
      item: MockConstructorIngredient
    })).toEqual({
      buns: MockConstructorBuns,
      ingredients: [...MockConstructorIngredients, MockConstructorIngredient]
    })
  });
  it('should handle ADD_BUNS', () => {
    expect(reducer({
      buns: MockConstructorBuns,
      ingredients: []
    }, {
      type: ADD_BUNS,
      item: MockAddBuns
    })).toEqual({
      buns: MockAddBuns,
      ingredients: []
    })
  });
  it('should handle UPDATE_INGREDIENTS_ORDER', () => {
    expect(reducer({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredients
    }, {
      type: UPDATE_INGREDIENTS_ORDER,
      payload: MockConstructorIngredientsUpdated
    })).toEqual({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredientsUpdated
    })
  });
  it('should handle DELETE_INGREDIENT', () => {
    expect(reducer({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredients
    }, {
      type: DELETE_INGREDIENT,
      payload: MockConstructorIngredientsDeleteOne,
      item: MockConstructorIngredient
    })).toEqual({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredientsDeleteOne
    })
  })
  it('should handle CONSTRUCTOR_INIT', () => {
    expect(reducer({
      buns: MockConstructorBuns,
      ingredients: MockConstructorIngredients
    }, {
      type: CONSTRUCTOR_INIT
    })).toEqual({
      buns: null,
      ingredients: []
    })
  });
})