"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[eventId]",{

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var _components_input_comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/input/comments */ \"./components/input/comments.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EventDetailPage(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var event = props.selectedEvent;\n    console.log(event._id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.getSession)().then(function(session) {\n            if (!session) {\n                router.replace('/login');\n            }\n        });\n    }, [\n        router\n    ]);\n    if (!event) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CVMA 18 - 2 \".concat(event.title)\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: event.description\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: event.title\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                date: event.date,\n                address: event.address,\n                image: event.image,\n                imageAlt: event.title\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: event.description\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_comments__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                eventId: event._id\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/pages/events/[eventId].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n}\n_s(EventDetailPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = EventDetailPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetailPage);\nvar _c;\n$RefreshReg$(_c, \"EventDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjtBQUNXO0FBQ007QUFFeUI7QUFDSTtBQUNKO0FBQ2Q7QUFDRjs7U0FFN0NVLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7O0lBQy9CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVCxzREFBUztJQUN4QixHQUFLLENBQUNVLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxhQUFhO0lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSSxHQUFHO0lBQ3JCaEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkcsNERBQVUsR0FBR2MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFLLENBQUM7WUFDOUIsRUFBRSxHQUFFQSxPQUFPLEVBQUMsQ0FBQztnQkFDWFAsTUFBTSxDQUFDUSxPQUFPLENBQUMsQ0FBUTtZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBQyxDQUFDUjtRQUFBQSxNQUFNO0lBQUEsQ0FBQztJQUVWLEVBQUUsR0FBR0MsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLDZFQUNIUSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFRO2tHQUNwQkMsQ0FBQzswQkFBQyxDQUFVOzs7Ozs7Ozs7OztJQUduQixDQUFDO0lBRUQsTUFBTSw2RUFDSHZCLDJDQUFROzt3RkFDTkUsa0RBQUk7O2dHQUNGc0IsQ0FBSztrQ0FBRyxDQUFZLGNBQWMsT0FBWlgsS0FBSyxDQUFDVyxLQUFLOzs7Ozs7Z0dBQ2pDQyxDQUFJO3dCQUNIQyxJQUFJLEVBQUMsQ0FBYTt3QkFDbEJDLE9BQU8sRUFBRWQsS0FBSyxDQUFDZSxXQUFXOzs7Ozs7Ozs7Ozs7d0ZBRzdCdkIsOEVBQVk7Z0JBQUNtQixLQUFLLEVBQUVYLEtBQUssQ0FBQ1csS0FBSzs7Ozs7O3dGQUMvQmxCLGdGQUFjO2dCQUNidUIsSUFBSSxFQUFFaEIsS0FBSyxDQUFDZ0IsSUFBSTtnQkFDaEJDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQ2lCLE9BQU87Z0JBQ3RCQyxLQUFLLEVBQUVsQixLQUFLLENBQUNrQixLQUFLO2dCQUNsQkMsUUFBUSxFQUFFbkIsS0FBSyxDQUFDVyxLQUFLOzs7Ozs7d0ZBRXRCakIsOEVBQVk7c0dBQ1ZnQixDQUFDOzhCQUFFVixLQUFLLENBQUNlLFdBQVc7Ozs7Ozs7Ozs7O3dGQUV0Qm5CLGtFQUFRO2dCQUFDd0IsT0FBTyxFQUFFcEIsS0FBSyxDQUFDSSxHQUFHOzs7Ozs7Ozs7Ozs7QUFHbEMsQ0FBQztHQTFDUVAsZUFBZTs7UUFDUFAsa0RBQVM7OztLQURqQk8sZUFBZTs7QUFxRXhCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudElkXS5qcz9hMjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgZ2V0RXZlbnRCeUlkLCBnZXRGZWF0dXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWwnO1xuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5JztcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MnO1xuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50JztcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnQnO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvY29tbWVudHMnO1xuXG5mdW5jdGlvbiBFdmVudERldGFpbFBhZ2UocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGV2ZW50ID0gcHJvcHMuc2VsZWN0ZWRFdmVudDtcbiAgY29uc29sZS5sb2coZXZlbnQuX2lkKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICBpZighc2Vzc2lvbil7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sW3JvdXRlcl0pXG5cbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YENWTUEgMTggLSAyICR7ZXZlbnQudGl0bGV9YH08L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgIGNvbnRlbnQ9e2V2ZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEV2ZW50U3VtbWFyeSB0aXRsZT17ZXZlbnQudGl0bGV9IC8+XG4gICAgICA8RXZlbnRMb2dpc3RpY3NcbiAgICAgICAgZGF0ZT17ZXZlbnQuZGF0ZX1cbiAgICAgICAgYWRkcmVzcz17ZXZlbnQuYWRkcmVzc31cbiAgICAgICAgaW1hZ2U9e2V2ZW50LmltYWdlfVxuICAgICAgICBpbWFnZUFsdD17ZXZlbnQudGl0bGV9XG4gICAgICAvPlxuICAgICAgPEV2ZW50Q29udGVudD5cbiAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvRXZlbnRDb250ZW50PlxuICAgICAgPENvbW1lbnRzIGV2ZW50SWQ9e2V2ZW50Ll9pZH0gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBldmVudElkID0gY29udGV4dC5wYXJhbXMuZXZlbnRpZDtcbiAgXG4gIGNvbnN0IGV2ZW50ID0gYXdhaXQgZ2V0RXZlbnRCeUlkKGV2ZW50SWQpO1xuICBcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZWxlY3RlZEV2ZW50OiBldmVudFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMzBcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBldmVudHMgPSBhd2FpdCBnZXRGZWF0dXJlZEV2ZW50cygpO1xuXG4gIGNvbnN0IHBhdGhzID0gZXZlbnRzLm1hcChldmVudCA9PiAoeyBwYXJhbXM6IHsgZXZlbnRJZDogZXZlbnQuX2lkIH0gfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLFxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlsUGFnZTtcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJnZXRTZXNzaW9uIiwiRXZlbnRTdW1tYXJ5IiwiRXZlbnRMb2dpc3RpY3MiLCJFdmVudENvbnRlbnQiLCJFcnJvckFsZXJ0IiwiQ29tbWVudHMiLCJFdmVudERldGFpbFBhZ2UiLCJwcm9wcyIsInJvdXRlciIsImV2ZW50Iiwic2VsZWN0ZWRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJ0aGVuIiwic2Vzc2lvbiIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImV2ZW50SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n");

/***/ })

});