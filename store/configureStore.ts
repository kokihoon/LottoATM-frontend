import { createStore, Store, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./index";
import rootSaga from "../saga";

//saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const isDevelopment = process.env.NODE_ENV === "development";

// 개발환경일때만 크롬 확장프로그램 추가
const devTools = "";
const composeEnhancers = devTools || compose;

const configureStore = (initialState?: object): Store => {
  const store: Store = createStore(
    rootReducers,
    initialState!,
    composeEnhancers(applyMiddleware(...middleWares))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
