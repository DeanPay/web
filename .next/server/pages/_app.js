/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n\n//Packages\n\n\n\n\n//Stylesheets\n\n\n//Router events\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_2___default().done));\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const protectedRoutes = [\"fund\", \"pay\", \"transfer\"];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userToken = localStorage.getItem(\"userToken\"); //get current token\n        const pathName = router.pathname; //get the current path name\n        console.log(pathName);\n        //Check if the route matches any of the protected ones\n        const checkRoute = ()=>{\n            if (pathName.includes(\"/pay\") || pathName.includes(\"/fund\") || pathName.includes(\"/transfer\") || pathName.includes(\"/logout\") || pathName.includes(\"/api\") || pathName.includes(\"/fail\") || pathName.includes(\"/success\")) {\n                return true;\n            }\n        };\n        if (checkRoute && (userToken == null || userToken == undefined) && pathName.trim() !== \"/\") {\n            router.push(\"/login\");\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/macintosh/deanpay/web/pages/_app.js\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBVTtBQUNzQjtBQUNDO0FBQ0E7QUFDTTtBQUN2QyxFQUFhO0FBQ2lCO0FBQ0U7QUFFaEMsRUFBZTtBQUNmQSw0REFBZ0IsQ0FBQyxDQUFrQixtQkFBRUMsd0RBQWU7QUFDcERELDREQUFnQixDQUFDLENBQWtCLG1CQUFFQyx1REFBYztBQUNuREQsNERBQWdCLENBQUMsQ0FBcUIsc0JBQUVDLHVEQUFjO1NBRTdDTyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7SUFFeEIsRUFBdUQ7SUFFdkRELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ1UsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFXLFlBQUcsQ0FBbUI7UUFDeEUsS0FBSyxDQUFDQyxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssUUFBUSxDQUFFLENBQTJCO1FBRTdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUTtRQUNwQixFQUFzRDtRQUN0RCxLQUFLLENBQUNJLFVBQVUsT0FBUyxDQUFDO1lBQ3hCLEVBQUUsRUFDQUosUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBTSxVQUN4QkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBTyxXQUN6QkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBVyxlQUM3QkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBUyxhQUMzQkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBTSxVQUN4QkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBTyxXQUN6QkwsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBVSxZQUM1QixDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLEVBQ0FELFVBQVUsS0FDVFAsU0FBUyxJQUFJLElBQUksSUFBSUEsU0FBUyxJQUFJUyxTQUFTLEtBQzVDTixRQUFRLENBQUNPLElBQUksT0FBTyxDQUFHLElBQ3ZCLENBQUM7WUFDRFgsTUFBTSxDQUFDWSxJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQUVkLFNBQVM7V0FBS0MsU0FBUzs7Ozs7O0FBQ2pDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2F0aWRlYW4vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9QYWNrYWdlc1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vU3R5bGVzaGVldHNcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL25wcm9ncmVzcy5jc3NcIjtcblxuLy9Sb3V0ZXIgZXZlbnRzXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBuUHJvZ3Jlc3Muc3RhcnQpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgblByb2dyZXNzLmRvbmUpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgblByb2dyZXNzLmRvbmUpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgcHJvdGVjdGVkUm91dGVzID0gW1wiZnVuZFwiLCBcInBheVwiLCBcInRyYW5zZmVyXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlclRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVG9rZW5cIik7IC8vZ2V0IGN1cnJlbnQgdG9rZW5cbiAgICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZTsgLy9nZXQgdGhlIGN1cnJlbnQgcGF0aCBuYW1lXG5cbiAgICBjb25zb2xlLmxvZyhwYXRoTmFtZSk7XG4gICAgLy9DaGVjayBpZiB0aGUgcm91dGUgbWF0Y2hlcyBhbnkgb2YgdGhlIHByb3RlY3RlZCBvbmVzXG4gICAgY29uc3QgY2hlY2tSb3V0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGF0aE5hbWUuaW5jbHVkZXMoXCIvcGF5XCIpIHx8XG4gICAgICAgIHBhdGhOYW1lLmluY2x1ZGVzKFwiL2Z1bmRcIikgfHxcbiAgICAgICAgcGF0aE5hbWUuaW5jbHVkZXMoXCIvdHJhbnNmZXJcIikgfHxcbiAgICAgICAgcGF0aE5hbWUuaW5jbHVkZXMoXCIvbG9nb3V0XCIpIHx8XG4gICAgICAgIHBhdGhOYW1lLmluY2x1ZGVzKFwiL2FwaVwiKSB8fFxuICAgICAgICBwYXRoTmFtZS5pbmNsdWRlcyhcIi9mYWlsXCIpIHx8XG4gICAgICAgIHBhdGhOYW1lLmluY2x1ZGVzKFwiL3N1Y2Nlc3NcIilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChcbiAgICAgIGNoZWNrUm91dGUgJiZcbiAgICAgICh1c2VyVG9rZW4gPT0gbnVsbCB8fCB1c2VyVG9rZW4gPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgcGF0aE5hbWUudHJpbSgpICE9PSBcIi9cIlxuICAgICkge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJvdXRlciIsIm5Qcm9ncmVzcyIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VyVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGF0aE5hbWUiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1JvdXRlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJ0cmltIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();