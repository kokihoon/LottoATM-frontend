module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./action/action-helper.ts":
/*!*********************************!*\
  !*** ./action/action-helper.ts ***!
  \*********************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
function createAction(type, payload) {
  return payload === undefined ? {
    type
  } : {
    type,
    payload
  };
}

/***/ }),

/***/ "./action/auth.ts":
/*!************************!*\
  !*** ./action/auth.ts ***!
  \************************/
/*! exports provided: loginActions, signUpActions, setLoggedAction, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginActions", function() { return loginActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpActions", function() { return signUpActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoggedAction", function() { return setLoggedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./constants/actionTypes.ts");
/* harmony import */ var _action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-helper */ "./action/action-helper.ts");


const loginActions = {
  loginRequest: payload => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REQUEST"]], payload),
  loginSuccess: payload => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SUCCESS"]], payload),
  loginFailure: () => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FAILURE"]])
};
const signUpActions = {
  signUpRequest: payload => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REQUEST"]], payload),
  signUpSuccess: () => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SUCCESS"]]),
  signUpFailure: () => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FAILURE"]])
};
const setLoggedAction = () => Object(_action_helper__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOGGED_INFO"]);
const logout = () => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["POST_LOGOUT"]
});

/***/ }),

/***/ "./api/auth.ts":
/*!*********************!*\
  !*** ./api/auth.ts ***!
  \*********************/
/*! exports provided: postLogin, postSignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLogin", function() { return postLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSignUp", function() { return postSignUp; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./api/index.ts");

const postLogin = async payload => {
  return await _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("/signin", payload);
};
const postSignUp = async payload => {
  return await _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("/signup", payload);
};

/***/ }),

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization: ""
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./constants/actionTypes.ts":
/*!**********************************!*\
  !*** ./constants/actionTypes.ts ***!
  \**********************************/
/*! exports provided: REQUEST, SUCCESS, FAILURE, POST_LOGIN, POST_LOGOUT, SET_LOGGED_INFO, POST_SIGNUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST", function() { return REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LOGIN", function() { return POST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LOGOUT", function() { return POST_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGGED_INFO", function() { return SET_LOGGED_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SIGNUP", function() { return POST_SIGNUP; });
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
} // Auth


const POST_LOGIN = createRequestTypes("POST_LOGIN");
const POST_LOGOUT = "POST_LOGOUT";
const SET_LOGGED_INFO = "SET_LOGGED_INFO";
const POST_SIGNUP = createRequestTypes("POST_SIGNUP");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
var _jsxFileName = "/Users/kihoonko/Desktop/lottoATM-frontend/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])();

const LottoATM = ({
  Component,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })));
};

LottoATM.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (LottoATM);

/***/ }),

/***/ "./saga/auth.ts":
/*!**********************!*\
  !*** ./saga/auth.ts ***!
  \**********************/
/*! exports provided: fetchLogin, fetchSignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogin", function() { return fetchLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSignUp", function() { return fetchSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return root; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth */ "./api/auth.ts");
/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/auth */ "./action/auth.ts");
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/actionTypes */ "./constants/actionTypes.ts");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/localStorage */ "./utils/localStorage.ts");




 // 로그인

function* fetchLogin(action) {
  try {
    console.log(action.payload);
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_auth__WEBPACK_IMPORTED_MODULE_1__["postLogin"], action.payload);
    _utils_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].set("USER-KEY", data.access);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_action_auth__WEBPACK_IMPORTED_MODULE_2__["loginActions"].loginSuccess(data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_action_auth__WEBPACK_IMPORTED_MODULE_2__["loginActions"].loginFailure());
  }
}

function* watchFetchLogin() {
  while (true) {
    const action = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["take"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_3__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_3__["REQUEST"]]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(fetchLogin, action);
  }
} // 회원가입


function* fetchSignUp(action) {
  try {
    console.log(action.payload);
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_auth__WEBPACK_IMPORTED_MODULE_1__["postSignUp"], action.payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_action_auth__WEBPACK_IMPORTED_MODULE_2__["signUpActions"].signUpSuccess());
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_action_auth__WEBPACK_IMPORTED_MODULE_2__["signUpActions"].signUpFailure());
  }
}

function* watchFetchSignUp() {
  while (true) {
    const action = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["take"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_3__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_3__["REQUEST"]]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(fetchSignUp, action);
  }
}

function* root() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFetchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFetchSignUp)]);
  const token = _utils_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].get("USER-KEY");

  if (token) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action_auth__WEBPACK_IMPORTED_MODULE_2__["setLoggedAction"])());
  }
}

/***/ }),

/***/ "./saga/index.ts":
/*!***********************!*\
  !*** ./saga/index.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./saga/auth.ts");


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_1__["default"])]);
}

/***/ }),

/***/ "./store/auth/index.tsx":
/*!******************************!*\
  !*** ./store/auth/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/actionTypes */ "./constants/actionTypes.ts");


const initialState = {
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
  },
  signup: {
    error: "",
    email: "",
    password: "",
    username: "",
    authStatus: "INIT"
  }
};

const authReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["REQUEST"]]:
        {
          draft.login.authStatus = "FETCHING";
          draft.login.error = "";
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SUCCESS"]]:
        {
          draft.login.authStatus = "SUCCESS";
          draft.user.userInfo = action.payload;
          draft.user.isLoggedIn = true;
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_LOGIN"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FAILURE"]]:
        {
          draft.login.authStatus = "FAILTURE";
          draft.user.isLoggedIn = false;
          draft.login.error = "passwordError";
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_LOGOUT"]:
        {
          draft.login.authStatus = "INIT";
          draft.user.isLoggedIn = false;
          draft.user.userInfo = initialState.user.userInfo;
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_LOGGED_INFO"]:
        {
          draft.user.isLoggedIn = true;
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["REQUEST"]]:
        {
          draft.signup.authStatus = "INIT";
          draft.login.error = "";
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SUCCESS"]]:
        {
          draft.signup.authStatus = "SUCCESS";
          return draft;
        }

      case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["POST_SIGNUP"][_constants_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FAILURE"]]:
        {
          draft.signup.authStatus = "FAILTURE";
          draft.signup.error = "Error";
          return draft;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./store/index.ts");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../saga */ "./saga/index.ts");



 //saga 미들웨어 생성

const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const middleWares = [sagaMiddleware];
const isDevelopment = true; // 개발환경일때만 크롬 확장프로그램 추가

const devTools = "";
const composeEnhancers = devTools || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];

const configureStore = initialState => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_index__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleWares)));
  sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/ */ "./store/auth/index.tsx");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth___WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/localStorage.ts":
/*!*******************************!*\
  !*** ./utils/localStorage.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const st = typeof localStorage === "object" ? localStorage : {};
const storage = {
  set(key, value) {
    st[key] = JSON.stringify(value);
  },

  get(key) {
    if (!st[key]) return null;
    const value = st[key];

    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },

  remove(key) {
    delete st[key];
  },

  clear() {
    if (st.clear) {
      st.clear();
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = (storage);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map