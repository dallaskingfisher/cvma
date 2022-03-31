"use strict";
(() => {
var exports = {};
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 6109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6723);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8611);



function testbuilder() {
    async function eventHandler(event) {
        event.preventDefault();
        const events = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_2__/* .getAllEvents */ .IP)();
        console.log(events);
    // // console.log(events.data)
    // const feature = await getFeaturedEvents();
    // // console.log(feature)
    // const id = "623555823144ad58f56e819b"
    // const eventId = await getEventById(id)
    // console.log(eventId)
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_events_update_event_update__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                onClick: eventHandler,
                children: "event"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testbuilder);


/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [611,723], () => (__webpack_exec__(6109)));
module.exports = __webpack_exports__;

})();