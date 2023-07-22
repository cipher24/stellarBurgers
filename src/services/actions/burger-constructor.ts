import type { IElement } from '../../utils/types';

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const ADD_BUNS: 'ADD_BUNS' = 'ADD_BUNS';
export const UPDATE_INGREDIENTS_ORDER: 'UPDATE_INGREDIENTS_ORDER' = 'UPDATE_INGREDIENTS_ORDER';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const CONSTRUCTOR_INIT: 'CONSTRUCTOR_INIT' = 'CONSTRUCTOR_INIT';


//скорее всего придется доописывать пэйлоад эншена
export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly item: IElement;
}

export interface IAddBuns {
  readonly type: typeof ADD_BUNS;
  readonly item: IElement;
}

export interface IUpdateIngredientsOrder {
  readonly type: typeof UPDATE_INGREDIENTS_ORDER;
  readonly payload: Array<IElement>;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: Array<IElement>
  readonly item: IElement
}
export interface IConstructorInit {
  readonly type: typeof CONSTRUCTOR_INIT;
}

export type TBurgerConstructorActions =
  | IAddIngredient
  | IAddBuns
  | IUpdateIngredientsOrder
  | IConstructorInit
  | IDeleteIngredient;