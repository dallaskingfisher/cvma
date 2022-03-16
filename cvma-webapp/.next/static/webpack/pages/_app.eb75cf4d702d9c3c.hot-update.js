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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-header.module.css */ \"./components/layout/main-header.module.css\");\n/* harmony import */ var _main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction MainHeader() {\n    var logoutHandler = function logoutHandler(event) {\n        event.preventDefault();\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signOut)();\n    };\n    var menuHandler = function menuHandler(event) {\n        event.preventDefault();\n        setMenuOpen(!menuOpen);\n    };\n    _s();\n    var ref = _slicedToArray((0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)(), 2), session = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), menuOpen = ref1[0], setMenuOpen = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var menuList = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://www.combatvet.us\",\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                    children: \"National\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"http://cvma18.cvma182.org\",\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                    children: \"State\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            session && loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/members\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Members\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/events/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        children: \"Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"Submit\",\n                        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().aItems),\n                        onSubmit: logoutHandler,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 65,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/images/Skully.png\",\n                    alt: \"Skully 18-2\",\n                    width: \"75\",\n                    height: \"75\"\n                }, void 0, false, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().links),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().ulItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().linkItems),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_main_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuButton),\n                                onClick: menuHandler,\n                                children: menuOpen ? \"Close\" : \"Menu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        menuOpen ? menuList : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dallasfisher/Documents/GitHub/cvma/cvma-webapp/components/layout/main-header.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this));\n}\n_s(MainHeader, \"Vx3zhM5Ve6isbjtcHqSppYG+zqY=\", false, function() {\n    return [\n        next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MainHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tYWluLWhlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNTO0FBQ1A7QUFDYztBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFN0NPLFVBQVUsR0FBRyxDQUFDO1FBS1pDLGFBQWEsR0FBdEIsUUFBUSxDQUFDQSxhQUFhLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBQzdCQSxLQUFLLENBQUNDLGNBQWM7UUFDcEJKLHlEQUFPO0lBRVQsQ0FBQztRQUVRSyxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxDQUFDRixLQUFLLEVBQUUsQ0FBQztRQUMzQkEsS0FBSyxDQUFDQyxjQUFjO1FBRXBCRSxXQUFXLEVBQUVDLFFBQVE7SUFDdkIsQ0FBQzs7SUFkRCxHQUFLLENBQXNCUixHQUFZLGtCQUFaQSw0REFBVSxRQUE5QlMsT0FBTyxHQUFhVCxHQUFZLEtBQXZCVSxPQUFPLEdBQUlWLEdBQVk7SUFDdkMsR0FBSyxDQUEyQkYsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBdkNVLFFBQVEsR0FBaUJWLElBQWUsS0FBOUJTLFdBQVcsR0FBSVQsSUFBZTtJQUMvQyxHQUFLLENBQUNhLE1BQU0sR0FBR2Qsc0RBQVM7SUFjeEIsR0FBSyxDQUFDZSxRQUFRLCtFQUNYQyxDQUFJOzt3RkFDRkMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFaEIsMEVBQWlCO3NHQUM3Qkosa0RBQUk7b0JBQUNzQixJQUFJLEVBQUMsQ0FBRzswR0FDWEMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFaEIsdUVBQWM7a0NBQUUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHckNlLENBQUU7Z0JBQUNDLFNBQVMsRUFBRWhCLDBFQUFpQjtzR0FDN0JtQixDQUFDO29CQUFDRCxJQUFJLEVBQUMsQ0FBMEI7b0JBQUNGLFNBQVMsRUFBRWhCLHVFQUFjOzhCQUFFLENBRTlEOzs7Ozs7Ozs7Ozt3RkFFRGUsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFaEIsMEVBQWlCO3NHQUM3Qm1CLENBQUM7b0JBQUNELElBQUksRUFBQyxDQUEyQjtvQkFBQ0YsU0FBUyxFQUFFaEIsdUVBQWM7OEJBQUUsQ0FFL0Q7Ozs7Ozs7Ozs7O1lBRURVLE9BQU8sSUFBSUMsT0FBTyxnRkFDaEJJLENBQUU7Z0JBQUNDLFNBQVMsRUFBRWhCLDBFQUFpQjtzR0FDN0JKLGtEQUFJO29CQUFDc0IsSUFBSSxFQUFDLENBQVE7MEdBQ2hCQyxDQUFDO3dCQUFDSCxTQUFTLEVBQUVoQix1RUFBYztrQ0FBRSxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2FBSXZDVSxPQUFPLGdGQUNOSyxDQUFFO2dCQUFDQyxTQUFTLEVBQUVoQiwwRUFBaUI7c0dBQzdCSixrREFBSTtvQkFBQ3NCLElBQUksRUFBQyxDQUFVOzBHQUNsQkMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFFaEIsdUVBQWM7a0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OzthQUl6Q1UsT0FBTyxnRkFDTkssQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFaEIsMEVBQWlCO3NHQUM3Qkosa0RBQUk7b0JBQUNzQixJQUFJLEVBQUMsQ0FBVTswR0FDbEJDLENBQUM7d0JBQUNILFNBQVMsRUFBRWhCLHVFQUFjO2tDQUFFLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7YUFJeENVLE9BQU8sZ0ZBQ05LLENBQUU7Z0JBQUNDLFNBQVMsRUFBRWhCLDBFQUFpQjtzR0FDOUJjLENBQUk7MEdBQ0RPLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDTixTQUFTLEVBQUVoQix1RUFBYzt3QkFBRXVCLFFBQVEsRUFBRW5CLGFBQWE7a0NBQUUsQ0FFMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPVixNQUFNLDZFQUNIb0IsQ0FBTTtRQUFDUixTQUFTLEVBQUVoQix1RUFBYzs7d0ZBQzlCeUIsQ0FBRztnQkFBQ1QsU0FBUyxFQUFFaEIsc0VBQWE7c0dBQzFCSCxtREFBSztvQkFDSjhCLEdBQUcsRUFBRSxDQUFvQjtvQkFDekJDLEdBQUcsRUFBQyxDQUFhO29CQUNqQkMsS0FBSyxFQUFDLENBQUk7b0JBQ1ZDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7Ozs7Ozt3RkFJZEMsQ0FBRztnQkFBQ2YsU0FBUyxFQUFFaEIsc0VBQWE7c0dBQzFCaUMsQ0FBRTtvQkFBQ2pCLFNBQVMsRUFBRWhCLHdFQUFlOztvR0FDM0JlLENBQUU7NEJBQUNDLFNBQVMsRUFBRWhCLDBFQUFpQjtrSEFDN0JtQixDQUFDO2dDQUFDSCxTQUFTLEVBQUVoQiwyRUFBa0I7Z0NBQUVvQyxPQUFPLEVBQUU3QixXQUFXOzBDQUNuREUsUUFBUSxHQUFHLENBQU8sU0FBRyxDQUFNOzs7Ozs7Ozs7Ozt3QkFHL0JBLFFBQVEsR0FBR0ksUUFBUSxHQUFHLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQyxDQUFDO0dBMUZRVixVQUFVOztRQUNVRix3REFBVTtRQUV0Qkgsa0RBQVM7OztLQUhqQkssVUFBVTtBQTRGbkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9tYWluLWhlYWRlci5qcz83YzA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbWFpbi1oZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIGxvZ291dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNpZ25PdXQoKTtcbiAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lbnVIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gIH1cblxuICBjb25zdCBtZW51TGlzdCA9IChcbiAgICA8c3Bhbj5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYUl0ZW1zfT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY29tYmF0dmV0LnVzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+XG4gICAgICAgICAgTmF0aW9uYWxcbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9jdm1hMTguY3ZtYTE4Mi5vcmdcIiBjbGFzc05hbWU9e2NsYXNzZXMuYUl0ZW1zfT5cbiAgICAgICAgICBTdGF0ZVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAge3Nlc3Npb24gJiYgbG9hZGluZyAmJiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlua0l0ZW1zfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuYUl0ZW1zfT5Mb2dpbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVtYmVyc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+TWVtYmVyczwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rSXRlbXN9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFJdGVtc30+RXZlbnRzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICl9XG4gICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtJdGVtc30+XG4gICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hSXRlbXN9IG9uU3VibWl0PXtsb2dvdXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgIDwvc3Bhbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1NrdWxseS5wbmdcIn1cbiAgICAgICAgICBhbHQ9XCJTa3VsbHkgMTgtMlwiXG4gICAgICAgICAgd2lkdGg9XCI3NVwiXG4gICAgICAgICAgaGVpZ2h0PVwiNzVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy51bEl0ZW1zfT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtJdGVtc30+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gb25DbGljaz17bWVudUhhbmRsZXJ9PlxuICAgICAgICAgICAgICB7bWVudU9wZW4gPyBcIkNsb3NlXCIgOiBcIk1lbnVcIn1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHttZW51T3BlbiA/IG1lbnVMaXN0IDogXCJcIn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2xhc3NlcyIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiTWFpbkhlYWRlciIsImxvZ291dEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVudUhhbmRsZXIiLCJzZXRNZW51T3BlbiIsIm1lbnVPcGVuIiwic2Vzc2lvbiIsImxvYWRpbmciLCJyb3V0ZXIiLCJtZW51TGlzdCIsInNwYW4iLCJsaSIsImNsYXNzTmFtZSIsImxpbmtJdGVtcyIsImhyZWYiLCJhIiwiYUl0ZW1zIiwiYnV0dG9uIiwidHlwZSIsIm9uU3VibWl0IiwiaGVhZGVyIiwiZGl2IiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hdiIsImxpbmtzIiwidWwiLCJ1bEl0ZW1zIiwibWVudUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/main-header.js\n");

/***/ })

});