"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/members",{

/***/ "./pages/members/index.js":
/*!********************************!*\
  !*** ./pages/members/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/events/update/event-update */ \"./components/events/update/event-update.js\");\n/* harmony import */ var _components_members_memberUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/members/memberUpdate */ \"./components/members/memberUpdate.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Members(props) {\n    _s();\n    var _user = props.session.user, name = _user.name, email = _user.email;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), memberInfo = ref[0], setMemberInfo = ref[1];\n    fetch(\"/api/members/memberUpdate\").then(function(response) {\n        return response.json();\n    }).then(function(data) {\n        return setMemberInfo(data);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Members Area\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Member Info\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_members_memberUpdate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Doucuments\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"admin pannel\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_s(Members, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Members;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Members);\nvar _c;\n$RefreshReg$(_c, \"Members\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW1iZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3FFO0FBQ0w7QUFDdEI7O1NBQ2pDSSxPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUNyQixHQUFLLENBQW1CQSxLQUFrQixHQUFsQkEsS0FBSyxDQUFDQyxPQUFPLENBQUNDLElBQUksRUFBbENDLElBQUksR0FBWUgsS0FBa0IsQ0FBbENHLElBQUksRUFBRUMsS0FBSyxHQUFLSixLQUFrQixDQUE1QkksS0FBSztJQUNuQixHQUFLLENBQWdDUCxHQUFVLEdBQVZBLCtDQUFRLElBQXRDUSxVQUFVLEdBQW9CUixHQUFVLEtBQTVCUyxhQUFhLEdBQUtULEdBQVU7SUFFN0NVLEtBQUssQ0FBQyxDQUEyQiw0QkFBRUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7UUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7T0FBSUYsSUFBSSxDQUFDRyxRQUFRTCxDQUFSSyxJQUFJO1FBQUlMLE1BQU0sQ0FBTkEsYUFBYSxDQUFDSyxJQUFJOztJQU94RyxNQUFNLDZFQUNIQyxDQUFPOzt3RkFDTEMsQ0FBRztzR0FDREMsQ0FBRTs4QkFBQyxDQUFZOzs7Ozs7Ozs7Ozt3RkFFakJELENBQUc7O29CQUFDLENBQ0Q7Z0dBQUNqQix3RUFBWTs7Ozs7Ozs7Ozs7d0ZBRWhCaUIsQ0FBRzswQkFBQyxDQUFVOzs7Ozs7d0ZBQ2RBLENBQUc7O29CQUFDLENBRUg7Z0dBQUNsQiw4RUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEIsQ0FBQztHQTFCUUksT0FBTztLQUFQQSxPQUFPOztBQThDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tZW1iZXJzL2luZGV4LmpzPzQzZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgRXZlbnRVcGRhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3VwZGF0ZS9ldmVudC11cGRhdGVcIjtcbmltcG9ydCBNZW1iZXJVcGRhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVtYmVycy9tZW1iZXJVcGRhdGVcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIE1lbWJlcnMocHJvcHMpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBwcm9wcy5zZXNzaW9uLnVzZXJcbiAgICBjb25zdCBbbWVtYmVySW5mbywgc2V0TWVtYmVySW5mbyBdID0gdXNlU3RhdGUoKTtcbiAgIFxuICAgICAgZmV0Y2goXCIvYXBpL21lbWJlcnMvbWVtYmVyVXBkYXRlXCIpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0TWVtYmVySW5mbyhkYXRhKSlcblxuICAgXG4gICAgXG4gIFxuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NZW1iZXJzIEFyZWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2Pk1lbWJlciBJbmZvXG4gICAgICAgICAgPE1lbWJlclVwZGF0ZSAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5Eb3VjdW1lbnRzPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBhZG1pbiBwYW5uZWxcbiAgICAgICAgPEV2ZW50VXBkYXRlIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XG4gIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbWVtYmVycy9tZW1iZXJVcGRhdGVcIikudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvbG9naW5cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuIFxuIFxuXG4gIHJldHVybiB7IHByb3BzOntzZXNzaW9uLG1lbWJlcnM6IG1lbWJlcnMgfSBcbn07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnM7XG4iXSwibmFtZXMiOlsiRXZlbnRVcGRhdGUiLCJNZW1iZXJVcGRhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lbWJlcnMiLCJwcm9wcyIsInNlc3Npb24iLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwibWVtYmVySW5mbyIsInNldE1lbWJlckluZm8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2VjdGlvbiIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/members/index.js\n");

/***/ })

});