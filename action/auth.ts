import {
  POST_LOGIN,
  POST_LOGOUT,
  SET_LOGGED_INFO,
  REQUEST,
  SUCCESS,
  FAILURE
} from "../constants/actionTypes";
import { createAction } from "./action-helper";
import { IAuthUser, IAuthLogin } from "../model/user";
import { ActionsUnion } from "./types";

export const loginActions = {
  loginRequest: (payload: IAuthLogin): any =>
    createAction(POST_LOGIN[REQUEST], payload),
  loginSuccess: (payload: IAuthUser): any =>
    createAction(POST_LOGIN[SUCCESS], payload),
  loginFailure: (): any => createAction(POST_LOGIN[FAILURE])
};

export const setLoggedAction = () => createAction(SET_LOGGED_INFO);
export const logout = () => ({ type: POST_LOGOUT });

export type Login = ReturnType<typeof loginActions.loginRequest>;
export type Logout = ReturnType<typeof logout>;
export type SetLoggedInfo = ReturnType<typeof setLoggedAction>;

export type AuthAction =
  | ActionsUnion<typeof loginActions>
  | Logout
  | SetLoggedInfo;
