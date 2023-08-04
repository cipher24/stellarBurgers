import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, IElement, IElementTemp } from '../../utils/types';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const DECREASE_INGREDIENT_COUNT: 'DECREASE_INGREDIENT_COUNT' = 'DECREASE_INGREDIENT_COUNT';
export const RESET_COUNTS: 'RESET_COUNTS' = 'RESET_COUNTS';
export const INCREASE_INGREDIENT_COUNT: 'INCREASE_INGREDIENT_COUNT' = 'INCREASE_INGREDIENT_COUNT';
export const INCREASE_BUN_COUNT: 'INCREASE_BUN_COUNT' = 'INCREASE_BUN_COUNT';

// ? разделить типы на тип с count и c dragId ?
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: Array<IElementTemp>;
}
export interface IGetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
  readonly payload: string
}

export type TBurgerIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsError;

export function getIngredientsRequest() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    requestNorma('ingredients')
      .then(answer => {
        const data = answer.data.map((item: IElement) => { return { ...item, count: 0 } })
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: GET_INGREDIENTS_ERROR,
          payload: e.message
        })
      })
  }
}



