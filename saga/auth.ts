import { all, fork, call, take, put } from "redux-saga/effects";
import { postLogin } from "../api/auth";
import {
  AuthAction,
  Login,
  loginActions,
  setLoggedAction,
  SetLoggedInfo
} from "../action/auth";
import * as types from "../constants/actionTypes";
import localStorage from "../utils/localStorage";

export function* fetchLogin(action: Login) {
  try {
    console.log(action.payload);
    const { data } = yield call(postLogin, action.payload);
    localStorage.set("USER-KEY", data.access);
    yield put<AuthAction>(loginActions.loginSuccess(data));
  } catch (error) {
    yield put<AuthAction>(loginActions.loginFailure());
  }
}

function* watchFetchLogin() {
  while (true) {
    const action: AuthAction = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, action);
  }
}

export default function* root() {
  yield all([fork(watchFetchLogin)]);

  const token = localStorage.get("USER-KEY");

  if (token) {
    yield put<SetLoggedInfo>(setLoggedAction());
  }
}
