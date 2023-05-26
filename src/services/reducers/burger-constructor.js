//типы экшенов
import { TEST_ACTION } from "../actions/burger-constructor"

const initialState = {
 buns: {},
 ingredients: [],
 total: 0
}

export const burgerConstructorReducer = (state=initialState, action) => {
  switch (action.type) {
    //тип экшена
    /* case "": {
      return state
    } */
    default :{
      return state
    }
  }
}