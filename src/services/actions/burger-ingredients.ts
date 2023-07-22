import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, IElement, IElementTemp, TAnswerError } from '../../utils/types';

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
  readonly ingredients: Array<IElementTemp & { count: number } & {dragId: string}>;
}
export interface IGetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
  readonly payload: TAnswerError
}
export interface IResetCounts {
  readonly type: typeof RESET_COUNTS;
}
export interface IIncreaseIngredientCount {
  readonly type: typeof INCREASE_INGREDIENT_COUNT;
  readonly item: IElement;
}
export interface IIncreaseBunCount {
  readonly type: typeof INCREASE_BUN_COUNT;
  readonly item: IElement;
}
export interface IDecreaseIngredientCount {
  readonly type: typeof DECREASE_INGREDIENT_COUNT;
  readonly item: IElementTemp & { count: number };
}

export type TBurgerIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsError
  | IDecreaseIngredientCount
  | IIncreaseBunCount
  | IIncreaseIngredientCount
  | IResetCounts;

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
          payload: e
        })
      })
  }
}


