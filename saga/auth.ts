import { all, fork, call, take, put } from "redux-saga/effects";
import { postLogin, postSignUp } from "../api/auth";
import {
  AuthAction,
  Login,
  loginActions,
  setLoggedAction,
  SetLoggedInfo,
  SignUp,
  signUpActions
} from "../action/auth";
import * as types from "../constants/actionTypes";
import localStorage from "../utils/localStorage";

// 로그인
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

// 회원가입
export function* fetchSignUp(action: SignUp) {
  try {
    console.log(action.payload);
    const { data } = yield call(postSignUp, action.payload);
    yield put<AuthAction>(signUpActions.signUpSuccess());
  } catch (error) {
    yield put<AuthAction>(signUpActions.signUpFailure());
  }
}

function* watchFetchSignUp() {
  while (true) {
    const action: AuthAction = yield take(types.POST_SIGNUP[types.REQUEST]);
    yield fork(fetchSignUp, action);
  }
}

export default function* root() {
  yield all([fork(watchFetchLogin), fork(watchFetchSignUp)]);

  const token = localStorage.get("USER-KEY");

  if (token) {
    yield put<SetLoggedInfo>(setLoggedAction());
  }
}
