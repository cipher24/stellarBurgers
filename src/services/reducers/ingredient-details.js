//типы экшенов
import { TEST_ACTION } from "../actions/ingredient-details"

const initialState = {
  name: '',
  calories: 0,
  fat: 0,
  proteins: 0,
  carbohydrates: 0,
  src: ''
}

export const ingredientDetailsReducer = (state=initialState, action) => {
  switch (action.type) {
    //тип экшена
    default: {
      return state
    }
  }
}