//типы экшенов
import { TEST_ACTION } from "../actions/ingredient-details"

const initialState = {
  orderNumber: null
}

export const ingredientDetailsReducer = (state=initialState, action) => {
  switch (action.type) {
    //тип экшена
    case "sd": {
      return state
    }
  }
}