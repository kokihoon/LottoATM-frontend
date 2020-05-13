import produce from "immer";
import { AuthAction } from "../../action/auth";
import {
  POST_LOGIN,
  POST_LOGOUT,
  SET_LOGGED_INFO,
  REQUEST,
  SUCCESS,
  FAILURE
} from "../../constants/actionTypes";

import { IAuthUser, IAuthLogin } from "../../model/user";

export interface IAuthState {
  user: IAuthUser;
  login: IAuthLogin;
}

const initialState: IAuthState = {
  user: {
    error: "",
    isLoggedIn: false,
    userInfo: {
      user_id: -1,
      email: "",
      nickname: ""
    }
  },
  login: {
    email: "",
    username: "",
    password: "",
    authStatus: "INIT",
    error: ""
  }
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  return produce(state, draft => {
    switch (action.type) {
      case POST_LOGIN[REQUEST]: {
        draft.login.authStatus = "FETCHING";
        draft.login.error = "";
        return draft;
      }
      case POST_LOGIN[SUCCESS]: {
        draft.login.authStatus = "SUCCESS";
        draft.user.userInfo = action.payload;
        draft.user.isLoggedIn = true;
        return draft;
      }
      case POST_LOGIN[FAILURE]: {
        draft.login.authStatus = "FAILTURE";
        draft.user.isLoggedIn = false;
        draft.login.error = "passwordError";
        return draft;
      }
      case POST_LOGOUT: {
        draft.login.authStatus = "INIT";
        draft.user.isLoggedIn = false;
        draft.user.userInfo = initialState.user.userInfo;

        return draft;
      }
      case SET_LOGGED_INFO: {
        draft.user.isLoggedIn = true;
        return draft;
      }
    }
  });
};

export default authReducer;
