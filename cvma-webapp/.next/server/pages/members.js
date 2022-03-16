"use strict";
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
exports.id = "pages/members";
exports.ids = ["pages/members"];
exports.modules = {

/***/ "./pages/members/index.js":
/*!********************************!*\
  !*** ./pages/members/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Members() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Members Area\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                    lineNumber: 6,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Member Info\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Doucuments\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"admin pannel\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req: context.req\n    });\n    if (!session) {\n        return {\n            redirect: {\n                destination: '/login',\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Members);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW1iZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkM7U0FFcENDLE9BQU8sR0FBRyxDQUFDO0lBQ2hCLE1BQU0sNkVBQ0RDLENBQU87O3dGQUNIQyxDQUFHO3NHQUFFQyxDQUFFOzhCQUFDLENBQVk7Ozs7Ozs7Ozs7O3dGQUNwQkQsQ0FBRzswQkFBQyxDQUFXOzs7Ozs7d0ZBQ2ZBLENBQUc7MEJBQUMsQ0FBVTs7Ozs7O3dGQUNkQSxDQUFHOzBCQUFDLENBQVk7Ozs7Ozs7Ozs7OztBQUc3QixDQUFDO0FBSU0sZUFBZUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBRS9DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ1AsNERBQVUsQ0FBRSxDQUFDUTtRQUFBQSxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0UsR0FBRztJQUFBLENBQUM7SUFFcEQsRUFBRSxHQUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sQ0FBQyxDQUFDO1lBQ0pFLFFBQVEsRUFBRSxDQUFDO2dCQUNQQyxXQUFXLEVBQUUsQ0FBUTtnQkFDckJDLFNBQVMsRUFBRSxLQUFLO1lBQ3BCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDO1FBQUNDLEtBQUssRUFBRSxDQUFDTDtZQUFBQSxPQUFPO1FBQUEsQ0FBQztJQUFBLENBQUM7QUFDOUIsQ0FBQztBQUVELGlFQUFlTixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcm91dGluZy1jb3Vyc2UvLi9wYWdlcy9tZW1iZXJzL2luZGV4LmpzPzQzZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuXG5mdW5jdGlvbiBNZW1iZXJzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdj48aDE+TWVtYmVycyBBcmVhPC9oMT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TWVtYmVyIEluZm88L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RG91Y3VtZW50czwvZGl2PlxuICAgICAgICAgICAgPGRpdj5hZG1pbiBwYW5uZWw8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oIHtyZXE6IGNvbnRleHQucmVxfSlcblxuICAgIGlmKCFzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDogeyBcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJvcHM6IHtzZXNzaW9ufX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyczsiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIk1lbWJlcnMiLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsInJlcSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/members/index.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/members/index.js"));
module.exports = __webpack_exports__;

})();