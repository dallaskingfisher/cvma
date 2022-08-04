"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/main-header.js":
/*!******************************************!*\
  !*** ./components/layout/main-header.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-header.module.css */ \"./components/layout/main-header.module.css\");\n/* harmony import */ var _main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction MainHeader() {\n    var logoutHandler = function logoutHandler() {\n        router.push('/');\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signOut)();\n    };\n    var menuHandler = function menuHandler(event) {\n        event.preventDefault();\n        setMenuOpen(!menuOpen);\n    };\n    _s();\n    var ref = _slicedToArray((0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)(), 2), session = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), menuOpen = ref1[0], setMenuOpen = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var menuList = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 27,\n                        columnNumber: 22\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://www.combatvet.us\",\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                    children: \"National\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"http://cvma18.cvma182.org\",\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                    children: \"State\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, this),\n            !session && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 37,\n                        columnNumber: 26\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 37,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 36,\n                columnNumber: 6\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/members\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Members\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 42,\n                        columnNumber: 28\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 42,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 41,\n                columnNumber: 3\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/events/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 47,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        onClick: logoutHandler,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n        lineNumber: 25,\n        columnNumber: 20\n    }, this);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: '/images/Skully.png',\n                    alt: \"Skully 18-2\",\n                    width: \"75\",\n                    height: \"75\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().links),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().ulItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuButton),\n                                onClick: menuHandler,\n                                children: menuOpen ? 'Close' : 'Menu'\n                            }, void 0, false, {\n                                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        menuOpen ? menuList : ''\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this));\n}\n_s(MainHeader, \"akxG7YCiwV5WN6LPbAU/qfGjfh0=\", false, function() {\n    return [\n        next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MainHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tYWluLWhlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNTO0FBQ1I7QUFDZTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFNUNPLFVBQVUsR0FBRyxDQUFDO1FBS1pDLGFBQWEsR0FBdEIsUUFBUSxDQUFDQSxhQUFhLEdBQUUsQ0FBQztRQUN2QkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBRztRQUNmSix5REFBTztJQUVULENBQUM7UUFFUUssV0FBVyxHQUFwQixRQUFRLENBQUNBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDM0JBLEtBQUssQ0FBQ0MsY0FBYztRQUVwQkMsV0FBVyxFQUFFQyxRQUFRO0lBQ3ZCLENBQUM7O0lBZEQsR0FBSyxDQUF1QlYsR0FBWSxrQkFBWkEsNERBQVUsUUFBOUJXLE9BQU8sR0FBYVgsR0FBWSxLQUF2QlksT0FBTyxHQUFJWixHQUFZO0lBQ3hDLEdBQUssQ0FBNEJGLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXhDWSxRQUFRLEdBQWtCWixJQUFlLEtBQS9CVyxXQUFXLEdBQUtYLElBQWU7SUFDaEQsR0FBSyxDQUFDTSxNQUFNLEdBQUdQLHNEQUFTO0lBY3hCLEdBQUssQ0FBQ2dCLFFBQVEsK0VBQUlDLENBQUk7O3dGQUNuQkMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFakIsMEVBQWlCO3NHQUM3Qkosa0RBQUk7b0JBQUN1QixJQUFJLEVBQUMsQ0FBRzswR0FBRUMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFakIsdUVBQWM7a0NBQUUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFFbERnQixDQUFFO2dCQUFDQyxTQUFTLEVBQUVqQiwwRUFBaUI7c0dBQy9Cb0IsQ0FBQztvQkFBQ0QsSUFBSSxFQUFDLENBQTBCO29CQUFDRixTQUFTLEVBQUVqQix1RUFBYzs4QkFBRSxDQUFROzs7Ozs7Ozs7Ozt3RkFFdkVnQixDQUFFO2dCQUFDQyxTQUFTLEVBQUVqQiwwRUFBaUI7c0dBQzdCb0IsQ0FBQztvQkFBQ0QsSUFBSSxFQUFDLENBQTJCO29CQUFDRixTQUFTLEVBQUVqQix1RUFBYzs4QkFBRSxDQUFLOzs7Ozs7Ozs7OzthQUVwRVksT0FBTyxLQUFLQyxPQUFPLGdGQUNqQkcsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFakIsMEVBQWlCO3NHQUMvQkosa0RBQUk7b0JBQUN1QixJQUFJLEVBQUMsQ0FBUTswR0FBRUMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFakIsdUVBQWM7a0NBQUUsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7OztZQUd6RFksT0FBTyxnRkFDUEksQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFakIsMEVBQWlCO3NHQUM3Qkosa0RBQUk7b0JBQUN1QixJQUFJLEVBQUMsQ0FBVTswR0FBR0MsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFakIsdUVBQWM7a0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OztZQUczRFksT0FBTyxnRkFDTEksQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFakIsMEVBQWlCO3NHQUMvQkosa0RBQUk7b0JBQUN1QixJQUFJLEVBQUMsQ0FBVTswR0FBRUMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFakIsdUVBQWM7a0NBQUUsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztZQUd6RFksT0FBTyxnRkFDTEksQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFakIsMEVBQWlCO3NHQUMvQmUsQ0FBSTswR0FBRUssQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFakIsdUVBQWM7d0JBQUVzQixPQUFPLEVBQUVsQixhQUFhO2tDQUFFLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNeEUsTUFBTSw2RUFDSG1CLENBQU07UUFBQ04sU0FBUyxFQUFFakIsdUVBQWM7O3dGQUM5QndCLENBQUc7Z0JBQUNQLFNBQVMsRUFBRWpCLHNFQUFhO3NHQUU1QkgsbURBQUs7b0JBRUg2QixHQUFHLEVBQUUsQ0FBb0I7b0JBQ3pCQyxHQUFHLEVBQUMsQ0FBYTtvQkFDakJDLEtBQUssRUFBQyxDQUFJO29CQUNWQyxNQUFNLEVBQUMsQ0FBSTs7Ozs7Ozs7Ozs7d0ZBSWJDLENBQUc7Z0JBQUNiLFNBQVMsRUFBRWpCLHNFQUFhO3NHQUMxQmdDLENBQUU7b0JBQUNmLFNBQVMsRUFBRWpCLHdFQUFlOztvR0FDM0JnQixDQUFFOzRCQUFDQyxTQUFTLEVBQUVqQiwwRUFBaUI7a0hBQy9Cb0IsQ0FBQztnQ0FBQ0gsU0FBUyxFQUFFakIsMkVBQWtCO2dDQUFFc0IsT0FBTyxFQUFFZixXQUFXOzBDQUFHSSxRQUFRLEdBQUcsQ0FBTyxTQUFHLENBQU07Ozs7Ozs7Ozs7O3dCQUVuRkEsUUFBUSxHQUFHRyxRQUFRLEdBQUcsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWW5DLENBQUM7R0FoRlFYLFVBQVU7O1FBQ1dGLHdEQUFVO1FBRXZCSCxrREFBUzs7O0tBSGpCSyxVQUFVO0FBa0ZuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4taGVhZGVyLmpzPzdjMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL21haW4taGVhZGVyLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbixzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5cbmZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XG4gIGNvbnN0IFsgc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gbG9nb3V0SGFuZGxlcigpe1xuICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICBzaWduT3V0KCk7XG4gICAgXG4gIH1cblxuICBmdW5jdGlvbiBtZW51SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIHNldE1lbnVPcGVuKCFtZW51T3BlbilcbiAgfVxuXG4gIGNvbnN0IG1lbnVMaXN0ID0gPHNwYW4+IFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+SG9tZTwvYT48L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfSA+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNvbWJhdHZldC51c1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hSXRlbXN9Pk5hdGlvbmFsPC9hPlxuICA8L2xpPlxuICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtJdGVtc30+XG4gICAgPGEgaHJlZj1cImh0dHA6Ly9jdm1hMTguY3ZtYTE4Mi5vcmdcIiBjbGFzc05hbWU9e2NsYXNzZXMuYUl0ZW1zfT5TdGF0ZTwvYT5cbiAgPC9saT5cbiAgeyFzZXNzaW9uICYmICFsb2FkaW5nICYmIChcbiAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+TG9naW48L2E+PC9MaW5rPlxuICAgPC9saT5cbiAgKX1cbiAge3Nlc3Npb24gJiYgKFxuICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtJdGVtc30+XG4gICAgPExpbmsgaHJlZj1cIi9tZW1iZXJzXCIgPjxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hSXRlbXN9Pk1lbWJlcnM8L2E+PC9MaW5rPiBcbiAgICA8L2xpPlxuICAgICl9XG4gICAge3Nlc3Npb24gJiYgKFxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHMvXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+RXZlbnRzPC9hPjwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKX1cbiAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICAgICA8c3Bhbj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYUl0ZW1zfSBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5Mb2dvdXQ8L2E+PC9zcGFuPjwvbGk+XG4gICAgICApfVxuICAgIFxuICA8L3NwYW4+XG5cbiBcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuXG4gICAgICA8SW1hZ2VcbiAgICAgICAgIFxuICAgICAgICAgc3JjPXsnL2ltYWdlcy9Ta3VsbHkucG5nJ31cbiAgICAgICAgIGFsdD1cIlNrdWxseSAxOC0yXCJcbiAgICAgICAgIHdpZHRoPVwiNzVcIlxuICAgICAgICAgaGVpZ2h0PVwiNzVcIlxuICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnVsSXRlbXN9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gb25DbGljaz17bWVudUhhbmRsZXJ9PnttZW51T3BlbiA/ICdDbG9zZScgOiAnTWVudSd9PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge21lbnVPcGVuID8gbWVudUxpc3QgOiAnJ31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xuXG5cblxuXG5cblxuIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2xhc3NlcyIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiTWFpbkhlYWRlciIsImxvZ291dEhhbmRsZXIiLCJyb3V0ZXIiLCJwdXNoIiwibWVudUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0TWVudU9wZW4iLCJtZW51T3BlbiIsInNlc3Npb24iLCJsb2FkaW5nIiwibWVudUxpc3QiLCJzcGFuIiwibGkiLCJjbGFzc05hbWUiLCJsaW5rSXRlbXMiLCJocmVmIiwiYSIsImFJdGVtcyIsIm9uQ2xpY2siLCJoZWFkZXIiLCJkaXYiLCJpbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwibGlua3MiLCJ1bCIsInVsSXRlbXMiLCJtZW51QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/main-header.js\n");

/***/ })

});