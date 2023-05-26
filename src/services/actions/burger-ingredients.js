import { getIngredients } from '../../components/utils/burger-api';


export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';


export function getIngredientsRequest() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    getIngredients()
    .then(data=>{
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: data
      })
    })
    .catch(e => {
      console.log('ОШИБКА! : ', e);
      dispatch({
        type:  GET_INGREDIENTS_ERROR
      })
    })
  }
}
    /* getIngredients()
      .then(res => {
        res.ok ? (res.json()) : (
          dispatch({
            type: GET_INGREDIENTS_ERROR
          })
        )
      })
      .then(data => {

        if (data && data.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_ERROR
          });
        }
      }) 
  }
}
*/