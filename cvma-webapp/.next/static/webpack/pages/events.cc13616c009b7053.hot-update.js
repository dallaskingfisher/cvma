"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./components/events/event-list.js":
/*!*****************************************!*\
  !*** ./components/events/event-list.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ \"./components/events/event-item.js\");\n/* harmony import */ var _event_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list.module.css */ \"./components/events/event-list.module.css\");\n/* harmony import */ var _event_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_list_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction EventList(props) {\n    var _this = this;\n    // const { items } = props;\n    var items = props.items;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_event_list_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),\n        children: items.map(function(event) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_event_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: event._id,\n                title: event.title,\n                address: event.address,\n                date: event.date,\n                image: event.image\n            }, event.id, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/events/event-list.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/events/event-list.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_c = EventList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nvar _c;\n$RefreshReg$(_c, \"EventList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDUztTQUVwQ0UsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDMUIsRUFBMkI7SUFFekIsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0MsS0FBSztJQUMxQixNQUFNLDZFQUNIQyxDQUFFO1FBQUNDLFNBQVMsRUFBRUwsb0VBQVk7a0JBQ3hCRyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7MEJBQ2YsTUFBTSwrREFBTFQsbURBQVM7Z0JBRVJVLEVBQUUsRUFBRUQsS0FBSyxDQUFDRSxHQUFHO2dCQUNiQyxLQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBSztnQkFDbEJDLE9BQU8sRUFBRUosS0FBSyxDQUFDSSxPQUFPO2dCQUN0QkMsSUFBSSxFQUFFTCxLQUFLLENBQUNLLElBQUk7Z0JBQ2hCQyxLQUFLLEVBQUVOLEtBQUssQ0FBQ00sS0FBSztlQUxiTixLQUFLLENBQUNDLEVBQUU7Ozs7Ozs7Ozs7O0FBVXZCLENBQUM7S0FsQlFSLFNBQVM7QUFvQmxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdC5qcz83MmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEl0ZW0gZnJvbSAnLi9ldmVudC1pdGVtJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtbGlzdC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRMaXN0KHByb3BzKSB7XG4gLy8gY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG4gIFxuICAgY29uc3QgaXRlbXMgPSBwcm9wcy5pdGVtc1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7aXRlbXMubWFwKChldmVudCkgPT4gKFxuICAgICAgICA8RXZlbnRJdGVtXG4gICAgICAgICAga2V5PXtldmVudC5pZH1cbiAgICAgICAgICBpZD17ZXZlbnQuX2lkfVxuICAgICAgICAgIHRpdGxlPXtldmVudC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXtldmVudC5hZGRyZXNzfVxuICAgICAgICAgIGRhdGU9e2V2ZW50LmRhdGV9XG4gICAgICAgICAgaW1hZ2U9e2V2ZW50LmltYWdlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0O1xuIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsImNsYXNzZXMiLCJFdmVudExpc3QiLCJwcm9wcyIsIml0ZW1zIiwidWwiLCJjbGFzc05hbWUiLCJsaXN0IiwibWFwIiwiZXZlbnQiLCJpZCIsIl9pZCIsInRpdGxlIiwiYWRkcmVzcyIsImRhdGUiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/event-list.js\n");

/***/ })

});