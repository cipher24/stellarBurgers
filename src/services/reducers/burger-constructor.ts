import {
  ADD_INGREDIENT,
  ADD_BUNS,
  UPDATE_INGREDIENTS_ORDER,
  DELETE_INGREDIENT,
  CONSTRUCTOR_INIT,
} from "../actions/burger-constructor"
import { IElement } from '../../utils/types';
import type {TBurgerConstructorActions } from '../actions/burger-constructor';

export type TInitialState = {
  buns: IElement | null,
  ingredients: IElement[],
  total: number
}

const initialState: TInitialState = {
  buns: null,
  ingredients: [],
  total: 0
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TInitialState => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.item
        ],
        total: state.total + action.item.price
      }
    }
    case ADD_BUNS: {
      if (state.buns !== null) {
      return {
        ...state,
        total: state.buns.price ? (
          state.total - state.buns.price * 2 + action.item.price * 2
        ) : (
          state.total + action.item.price * 2
        ),
        buns: action.item,
      }
    }else {
      return {
        ...state,
        total: state.total + action.item.price * 2,
        buns: action.item,
      }
    }
    }
    case UPDATE_INGREDIENTS_ORDER: {
      return {
        ...state,
        ingredients: action.payload
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: action.payload,
        total: state.total - action.item.price
      }
    }
    case CONSTRUCTOR_INIT: {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
}