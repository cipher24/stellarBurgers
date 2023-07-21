import { store } from '../index';
import { TBurgerConstructorActions} from '../services/actions/burger-constructor';
import { TBurgerIngredientsActions } from '../services/actions/burger-ingredients';
import { TForgotPasswordActions } from '../services/actions/forgot-password';
import { TIngredientDetailsActions } from '../services/actions/ingredient-details';
import { TLoginActions } from '../services/actions/login';
import { TLogoutActions } from '../services/actions/logout';
import { TOrderActions } from '../services/actions/order-details';
import { TProfileActions } from '../services/actions/profile';
import { TRegisterActions } from '../services/actions/register';
import { TResetPasswordActions } from '../services/actions/reset-password';
import { Action, ActionCreator } from 'redux';
// import { ThunkDispatch } from 'react-redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { rootReducer } from '../services/reducers';
import { TFeedActions, THistoryActions } from '../services/actions/socket';
import { TShowOrderActions } from '../services/actions/show-order';


//описание  хранилища


//новый код
export type TRootState = ReturnType<typeof rootReducer>
// export type TRootState = ReturnType<typeof store.getState>;
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
| TShowOrderActions
| TFeedActions;
// export type TTest = ReturnType<TApplicationActions>
// Типизация thunk'ов 
/* export type AppThunk<TReturn = void> = ActionCreator<
ThunkAction<TReturn, Action, TRootState, TApplicationActions>
>; */



// типизация метода dispatch
export type AppDispatch = ThunkDispatch<TRootState, never, TApplicationActions>;
//либо
// export type AppDispatch = Dispatch<TApplicationActions>; 

export interface IElement {
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
  dragId: string;
  count: number;
};

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

export type TWSData = {
  success: boolean;
  orders: TWSOrder[];
  total: number;
  totalToday: number;
}
// export type TWS
export type TRequestProps = { [name: string]: string }

/* export enum WebsocketStatus {
  CONNECTING = 'CO'
} */