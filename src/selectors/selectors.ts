import { TRootState } from "../utils/types";

export const burgerIngredients = (store: TRootState) => store.burgerIngredientsReducer;
export const burgerIngredient = (store: TRootState) => store.burgerIngredientsReducer;
export const ingredientDetails = (store: TRootState) => store.ingredientDetailsReducer;
export const burgerConstructor = (store: TRootState) => store.burgerConstructorReducer;
export const orderDetails = (store: TRootState) => store.orderDetailsReducer;

export const profile = (store: TRootState) => store.profileReducer;
export const register = (store: TRootState) => store.registerReducer;
export const forgotPassword = (store: TRootState) => store.forgotPasswordReducer;
export const resetPassword = (store: TRootState) => store.resetPasswordReducer;

export const requestedOrder = (store: TRootState) => store.requestedOrderReducer;
export const socket = (store: TRootState) => store.socketReducer;


