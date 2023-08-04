import { TBurgerConstructorActions } from '../services/actions/burger-constructor';
import { TBurgerIngredientsActions } from '../services/actions/burger-ingredients';
import { TForgotPasswordActions } from '../services/actions/forgot-password';
import { TIngredientDetailsActions } from '../services/actions/ingredient-details';
import { TLoginActions } from '../services/actions/login';
import { TLogoutActions } from '../services/actions/logout';
import { TOrderActions } from '../services/actions/order-details';
import { TProfileActions } from '../services/actions/profile';
import { TRegisterActions } from '../services/actions/register';
import { TResetPasswordActions } from '../services/actions/reset-password';
import { ThunkDispatch } from 'redux-thunk';
import { rootReducer } from '../services/reducers';
import { TFeedActions, THistoryActions } from '../services/actions/socket';
import { TRequestOrderActions } from '../services/actions/request-order';


//описание  хранилища

export type TRootState = ReturnType<typeof rootReducer>

// Типизация всех экшенов приложения
export type TApplicationActions =
  TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TForgotPasswordActions
  | TIngredientDetailsActions
  | TLoginActions
  | TLogoutActions
  | TOrderActions
  | TProfileActions
  | TRegisterActions
  | TResetPasswordActions
  | THistoryActions
  | TRequestOrderActions
  | TFeedActions;

// типизация метода dispatch
export type AppDispatch = ThunkDispatch<TRootState, never, TApplicationActions>;


// переделать? сделать этот основным и уже добавлять dragId и count
export interface IElementTemp {
  _id: string;
  name: string;
  type: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  proteins: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v: number;
}
export interface IElement extends IElementTemp {
  dragId: string;
}
export type TUser = {
  email: string;
  name: string;
}

export type TWSOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export type TOrderWithOwner = TWSOrder & {
  owner: string;
  __v: number
}
export type TAnswerData = {
  success: boolean;
  orders: TOrderWithOwner[];
}

export type TWSData = {
  success: boolean;
  orders: TWSOrder[];
  total: number;
  totalToday: number;
}

export type TAnswerError = {
  success: boolean,
  message: string;
}

export type TRequestProps = { [name: string]: string };
