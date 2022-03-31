(() => {
var exports = {};
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 7670:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "results-title_title__7P2nZ"
};


/***/ }),

/***/ 7932:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "error-alert_alert__CinLM"
};


/***/ }),

/***/ 8407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7932);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ErrorAlert(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default().alert),
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorAlert);


/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(8611);
// EXTERNAL MODULE: ./components/events/event-list.js + 2 modules
var event_list = __webpack_require__(3968);
// EXTERNAL MODULE: ./components/ui/button.js
var ui_button = __webpack_require__(6844);
// EXTERNAL MODULE: ./components/events/results-title.module.css
var results_title_module = __webpack_require__(7670);
var results_title_module_default = /*#__PURE__*/__webpack_require__.n(results_title_module);
;// CONCATENATED MODULE: ./components/events/results-title.js



function ResultsTitle(props) {
    const { date  } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (results_title_module_default()).title,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Events in ",
                    humanReadableDate
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                link: "/events",
                children: "Show all events"
            })
        ]
    }));
}
/* harmony default export */ const results_title = (ResultsTitle);

// EXTERNAL MODULE: ./components/ui/error-alert.js
var error_alert = __webpack_require__(8407);
;// CONCATENATED MODULE: ./pages/events/[...slug].js










function FilteredEventsPage(props) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        (0,client_.getSession)().then((session)=>{
            if (!session) {
                router.replace('/login');
            }
        });
    }, [
        router
    ]);
    const date = new Date(props.date.year, props.date.month - 1);
    const eventHeader = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "CVMA 18 - 2 Events Filtered"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `All events for ${props.date.month}/${props.date.year}.`
            })
        ]
    });
    if (props.hasError) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(error_alert/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Invalid filter. Please adjust your values!"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        link: "/events",
                        children: "Show All Events"
                    })
                })
            ]
        }));
    }
    if (!props.events || props.events.length === 0) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(error_alert/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "No events found for the chosen filter!"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        link: "/events",
                        children: "Show All Events"
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(results_title, {
                date: date
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_list/* default */.Z, {
                items: props.events
            })
        ]
    }));
}
async function getServerSideProps(context) {
    const { params  } = context;
    const filterData = params.slug;
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: {
                hasError: true
            },
            notFound: true,
            redirect: {
                destination: '/error'
            }
        };
    }
    const filteredEvents = await (0,api_util/* getFilteredEvents */.nk)({
        year: numYear,
        month: numMonth
    });
    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    };
}
/* harmony default export */ const _slug_ = (FilteredEventsPage);


/***/ }),

/***/ 8432:
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,611,57,968], () => (__webpack_exec__(558)));
module.exports = __webpack_exports__;

})();