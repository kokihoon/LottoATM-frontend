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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLoayout/index.tsx":
/*!*****************************************!*\
  !*** ./components/AppLoayout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/AppLoayout/styled.ts");
var _jsxFileName = "/Users/kihoonko/Desktop/lottoATM-frontend/components/AppLoayout/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppLayout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NavLayout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["LayoutLogo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "LottoATM"), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Login"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["MenuModal"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "1"), children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/AppLoayout/styled.ts":
/*!*****************************************!*\
  !*** ./components/AppLoayout/styled.ts ***!
  \*****************************************/
/*! exports provided: NavLayout, LayoutLogo, Login, MenuModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLayout", function() { return NavLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLogo", function() { return LayoutLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModal", function() { return MenuModal; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavLayout",
  componentId: "sc-263gxd-0"
})(["height:69px;left:0;width:100%;background:#fff;box-shadow:0 1px 6px 0 rgba(32,33,36,0.28);height:50px;position:fixed;top:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;"]);
const LayoutLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__LayoutLogo",
  componentId: "sc-263gxd-1"
})(["color:#333;margin:15px;"]);
const Login = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Login",
  componentId: "sc-263gxd-2"
})(["color:#333;margin:15px;"]);
const MenuModal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuModal",
  componentId: "sc-263gxd-3"
})(["height:200px;width:30%;position:fixed;top:50px;right:0;background-color:#fff;border-radius:15px;margin:10px;box-shadow:0 1px 6px 0 rgba(32,33,36,0.28);"]);

/***/ }),

/***/ "./components/MainComponent/index.tsx":
/*!********************************************!*\
  !*** ./components/MainComponent/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/MainComponent/styled.ts");
var _jsxFileName = "/Users/kihoonko/Desktop/lottoATM-frontend/components/MainComponent/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MainComponent = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["MainHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "907\uD68C \uB2F9\uCCA8\uACB0\uACFC"), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["SubMainHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "(2020\uB144 04\uC6D4 18\uC77C \uCD94\uCCA8)"), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["BallNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["GeneralNumberNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#FF7272",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "21")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#FF7272",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "27")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#FF7272",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "29")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#AAAAAA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "38")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#AAAAAA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "40")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#B0D840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "44"))), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["PlusNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/plus_sign.png",
    alt: "my image",
    height: "50px;",
    width: "50px;",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["GeneralNumberNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["NumberBall"], {
    color: "#AAAAAA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Number"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "37"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

/***/ "./components/MainComponent/styled.ts":
/*!********************************************!*\
  !*** ./components/MainComponent/styled.ts ***!
  \********************************************/
/*! exports provided: MainLayout, MainHeader, SubMainHeader, BallNav, GeneralNumberNav, NumberBall, Number, PlusNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return MainLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeader", function() { return MainHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMainHeader", function() { return SubMainHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallNav", function() { return BallNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralNumberNav", function() { return GeneralNumberNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberBall", function() { return NumberBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusNav", function() { return PlusNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MainLayout",
  componentId: "sc-21n40s-0"
})(["background:#fff;display:flex;flex-direction:column;align-items:center;height:100%;"]);
const MainHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MainHeader",
  componentId: "sc-21n40s-1"
})(["color:#d43301;font-size:3rem;margin-top:6%;"]);
const SubMainHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SubMainHeader",
  componentId: "sc-21n40s-2"
})(["color:#707070;"]);
const BallNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BallNav",
  componentId: "sc-21n40s-3"
})(["display:flex;margin-top:3%;"]);
const GeneralNumberNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__GeneralNumberNav",
  componentId: "sc-21n40s-4"
})(["background-color:#f0f8ff;display:flex;box-shadow:0 1px 6px 0 rgba(32,33,36,0.28);border-radius:15px;"]);
const NumberBall = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NumberBall",
  componentId: "sc-21n40s-5"
})(["display:flex;width:120px;height:120px;border-radius:50%;background-color:", ";box-shadow:inset -25px -15px 40px rgba(0,0,0,0.3);background-image:linear-gradient( -45deg,rgba(255,255,220,0.3) 0%,transparent 100% );margin:20px;"], props => props.color);
const Number = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styled__Number",
  componentId: "sc-21n40s-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;font-size:3rem;color:#fff;"]);
const PlusNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__PlusNav",
  componentId: "sc-21n40s-7"
})(["display:flex;margin:15px;justify-content:center;align-items:center;"]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLoayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLoayout */ "./components/AppLoayout/index.tsx");
/* harmony import */ var _components_MainComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainComponent */ "./components/MainComponent/index.tsx");
var _jsxFileName = "/Users/kihoonko/Desktop/lottoATM-frontend/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(_components_AppLoayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_components_MainComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kihoonko/Desktop/lottoATM-frontend/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map