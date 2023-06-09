import { requestNorma } from '../../utils/burger-api';
import { IElement } from '../../utils/types';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export function getIngredientsRequest() {
  return function (dispatch: any) {
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
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: GET_INGREDIENTS_ERROR
        })
      })
  }
}
