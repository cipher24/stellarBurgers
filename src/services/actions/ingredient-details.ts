import { IElement } from '../../utils/types';

export const GET_INGREDIENT_INFO = 'GET_INGREDIENT_INFO';
export const CLOSE_DETAILS = 'CLOSE_DETAILS';

export const getIngredientInfo = (ingredient: IElement) => ({
  type: GET_INGREDIENT_INFO,
  payload: ingredient
})

export const closeDetails = () => ({
  type: CLOSE_DETAILS
})