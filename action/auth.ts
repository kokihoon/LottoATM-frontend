import {
  POST_LOGIN,
  POST_LOGOUT,
  SET_LOGGED_INFO,
  POST_SIGNUP,
  REQUEST,
  SUCCESS,
  FAILURE
} from "../constants/actionTypes";
import { createAction } from "./action-helper";
import { IAuthUser, IAuthLogin, IAuthSignUp } from "../model/user";
import { ActionsUnion } from "./types";

export const loginActions = {
  loginRequest: (payload: IAuthLogin): any =>
    createAction(POST_LOGIN[REQUEST], payload),
  loginSuccess: (payload: IAuthUser): any =>
    createAction(POST_LOGIN[SUCCESS], payload),
  loginFailure: (): any => createAction(POST_LOGIN[FAILURE])
};

export const signUpActions = {
  signUpRequest: (payload: IAuthSignUp): any =>
    createAction(POST_SIGNUP[REQUEST], payload),
  signUpSuccess: (): any => createAction(POST_SIGNUP[SUCCESS]),
  signUpFailure: (): any => createAction(POST_SIGNUP[FAILURE])
};

export const setLoggedAction = () => createAction(SET_LOGGED_INFO);
export const logout = () => ({ type: POST_LOGOUT });

export type Login = ReturnType<typeof loginActions.loginRequest>;
export type Logout = ReturnType<typeof logout>;
export type SetLoggedInfo = ReturnType<typeof setLoggedAction>;
export type SignUp = ReturnType<typeof signUpActions.signUpRequest>;

export type AuthAction =
  | ActionsUnion<typeof loginActions>
  | Logout
  | SetLoggedInfo
  | SignUp;
