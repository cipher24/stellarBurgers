import { GET_INGREDIENT_INFO, CLOSE_DETAILS } from "../actions/ingredient-details"

const initialState = {
  name: '',
  calories: 0,
  fat: 0,
  proteins: 0,
  carbohydrates: 0,
  image_large: '',
  isShowDetails: false
}

export const ingredientDetailsReducer = (state=initialState, action) => {
  const ingredient = action.payload;
  switch (action.type) {
    case GET_INGREDIENT_INFO: {
      return {
        ...state,
        name: ingredient.name,
        calories: ingredient.calories,
        fat: ingredient.fat,
        proteins: ingredient.proteins,
        carbohydrates: ingredient.carbohydrates,
        image_large: ingredient.image_large,
        isShowDetails: true
      }
    }
    case CLOSE_DETAILS: {
      return {
        ...state,
        name: '',
        calories: 0,
        fat: 0,
        proteins: 0,
        carbohydrates: 0,
        image_large: '',
        isShowDetails: false
      }
    }
    default: {
      return state
    }
  }
}