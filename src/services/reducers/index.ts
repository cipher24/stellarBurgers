import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';
import { orderDetailsReducer } from './order-details';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';
import { registerReducer } from './register';
import { loginReducer } from './login';
import { logoutReducer } from './logout';
import { profileReducer } from './profile';
import { socketReducer } from './socket';
import { showOrderReducer } from './show-order';

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  ingredientDetailsReducer,
  burgerConstructorReducer,
  orderDetailsReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  registerReducer,
  loginReducer,
  logoutReducer,
  profileReducer,
  socketReducer,
  showOrderReducer
});


//новый код
// export type TRootState = ReturnType<typeof rootReducer>