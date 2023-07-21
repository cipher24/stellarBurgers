import { IElement } from '../../utils/types';

export const GET_INGREDIENT_INFO: 'GET_INGREDIENT_INFO' = 'GET_INGREDIENT_INFO';
export const CLOSE_DETAILS: 'CLOSE_DETAILS' = 'CLOSE_DETAILS';

export interface IGetIngredientInfo {
  readonly type: typeof GET_INGREDIENT_INFO;
  readonly payload: IElement;
}
export interface ICloseDetails {
  readonly type: typeof CLOSE_DETAILS;
}

export type TIngredientDetailsActions = 
| IGetIngredientInfo
| ICloseDetails;

export const getIngredientInfo = (payload: IElement): IGetIngredientInfo => ({
  type: GET_INGREDIENT_INFO,
  payload: payload
})

export const closeDetails = (): ICloseDetails => ({
  type: CLOSE_DETAILS
})
