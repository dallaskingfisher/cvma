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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/events/update/event-update */ \"./components/events/update/event-update.js\");\n/* harmony import */ var _components_members_memberUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/members/memberUpdate */ \"./components/members/memberUpdate.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Members(props) {\n    _s();\n    var _user = props.session.user, name = _user.name, email = _user.email;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), memberInfo = ref[0], setMemberInfo = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetch(\"/api/members/memberUpdate\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setMemberInfo(data);\n        });\n    }, []);\n    console.log(memberInfo);\n    var members = memberInfo.find(function(event) {\n        return event.memberId === name;\n    });\n    console.log(members);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Members Area\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Member Info\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_members_memberUpdate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Doucuments\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"admin pannel\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/members/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n_s(Members, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Members;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Members);\nvar _c;\n$RefreshReg$(_c, \"Members\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW1iZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3FFO0FBQ0w7QUFDdEI7O1NBQ2pDSSxPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUNyQixHQUFLLENBQW1CQSxLQUFrQixHQUFsQkEsS0FBSyxDQUFDQyxPQUFPLENBQUNDLElBQUksRUFBbENDLElBQUksR0FBWUgsS0FBa0IsQ0FBbENHLElBQUksRUFBRUMsS0FBSyxHQUFLSixLQUFrQixDQUE1QkksS0FBSztJQUNuQixHQUFLLENBQWdDUCxHQUFVLEdBQVZBLCtDQUFRLElBQXRDUSxVQUFVLEdBQW9CUixHQUFVLEtBQTVCUyxhQUFhLEdBQUtULEdBQVU7SUFFL0NDLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2ZTLEtBQUssQ0FBQyxDQUEyQiw0QkFBRUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FBSUYsSUFBSSxDQUFDRyxRQUFRTCxDQUFSSyxJQUFJO1lBQUlMLE1BQU0sQ0FBTkEsYUFBYSxDQUFDSyxJQUFJOztJQUV0RyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixVQUFVO0lBRXRCLEdBQUssQ0FBQ1MsT0FBTyxHQUFHVCxVQUFVLENBQUNVLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxLQUFLO1FBQUlBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsUUFBUSxLQUFLZCxJQUFJOztJQUVoRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU87SUFHbkIsTUFBTSw2RUFDSEksQ0FBTzs7d0ZBQ0xDLENBQUc7c0dBQ0RDLENBQUU7OEJBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBRWpCRCxDQUFHOztvQkFBQyxDQUNEO2dHQUFDdkIsd0VBQVk7Ozs7Ozs7Ozs7O3dGQUVoQnVCLENBQUc7MEJBQUMsQ0FBVTs7Ozs7O3dGQUNkQSxDQUFHOztvQkFBQyxDQUVIO2dHQUFDeEIsOEVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7R0FoQ1FJLE9BQU87S0FBUEEsT0FBTzs7QUFvRGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVtYmVycy9pbmRleC5qcz80M2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IEV2ZW50VXBkYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy91cGRhdGUvZXZlbnQtdXBkYXRlXCI7XG5pbXBvcnQgTWVtYmVyVXBkYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbWJlcnMvbWVtYmVyVXBkYXRlXCI7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBNZW1iZXJzKHByb3BzKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gcHJvcHMuc2Vzc2lvbi51c2VyXG4gICAgY29uc3QgW21lbWJlckluZm8sIHNldE1lbWJlckluZm8gXSA9IHVzZVN0YXRlKCk7XG4gICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goXCIvYXBpL21lbWJlcnMvbWVtYmVyVXBkYXRlXCIpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0TWVtYmVySW5mbyhkYXRhKSlcbiAgICAgICAgXG4gICAgfSwgW10pO1xuICAgXG4gICAgXG4gIGNvbnNvbGUubG9nKG1lbWJlckluZm8pXG5cbiAgY29uc3QgbWVtYmVycyA9IG1lbWJlckluZm8uZmluZChldmVudCA9PiBldmVudC5tZW1iZXJJZCA9PT0gbmFtZSlcblxuICBjb25zb2xlLmxvZyhtZW1iZXJzKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NZW1iZXJzIEFyZWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2Pk1lbWJlciBJbmZvXG4gICAgICAgICAgPE1lbWJlclVwZGF0ZSAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5Eb3VjdW1lbnRzPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBhZG1pbiBwYW5uZWxcbiAgICAgICAgPEV2ZW50VXBkYXRlIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XG4gIGNvbnN0IG1lbWJlcklkID0gc2Vzc2lvbi51c2VyLm5hbWU7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gXG4gXG5cbiAgcmV0dXJuIHsgcHJvcHM6e3Nlc3Npb259fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVycztcbiJdLCJuYW1lcyI6WyJFdmVudFVwZGF0ZSIsIk1lbWJlclVwZGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVtYmVycyIsInByb3BzIiwic2Vzc2lvbiIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJtZW1iZXJJbmZvIiwic2V0TWVtYmVySW5mbyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWVtYmVycyIsImZpbmQiLCJldmVudCIsIm1lbWJlcklkIiwic2VjdGlvbiIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/members/index.js\n");

/***/ })

});