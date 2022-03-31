(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 3115:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "events-search_form__r_GYk",
	"controls": "events-search_controls__34AL4",
	"control": "events-search_control__BYmL_"
};


/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ events),
  "getStaticProps": () => (/* binding */ getStaticProps)
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
// EXTERNAL MODULE: ./components/events/events-search.module.css
var events_search_module = __webpack_require__(3115);
var events_search_module_default = /*#__PURE__*/__webpack_require__.n(events_search_module);
;// CONCATENATED MODULE: ./components/events/events-search.js




function EventsSearch(props) {
    const yearInputRef = (0,external_react_.useRef)();
    const monthInputRef = (0,external_react_.useRef)();
    function submitHandler(event) {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        props.onSearch(selectedYear, selectedMonth);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (events_search_module_default()).form,
        onSubmit: submitHandler,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (events_search_module_default()).controls,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (events_search_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "year",
                                children: "Year"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                id: "year",
                                ref: yearInputRef,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2021",
                                        children: "2021"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2022",
                                        children: "2022"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (events_search_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "month",
                                children: "Month"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                id: "month",
                                ref: monthInputRef,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "1",
                                        children: "January"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2",
                                        children: "February"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "3",
                                        children: "March"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "4",
                                        children: "April"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "5",
                                        children: "May"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "6",
                                        children: "June"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "7",
                                        children: "July"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "8",
                                        children: "August"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "9",
                                        children: "Septemer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "10",
                                        children: "October"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "11",
                                        children: "November"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "12",
                                        children: "December"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                children: "Find Events"
            })
        ]
    }));
}
/* harmony default export */ const events_search = (EventsSearch);

;// CONCATENATED MODULE: ./pages/events/index.js








function AllEventsPage(props) {
    const router = (0,router_.useRouter)();
    const { events  } = props;
    console.log(events);
    (0,external_react_.useEffect)(()=>{
        (0,client_.getSession)().then((session)=>{
            if (!session) {
                router.replace('/login');
            }
        });
    }, [
        router
    ]);
    console.log(props.events);
    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CVMA 18 - 2  Events"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Combat Veterans Motorcycle Association 18 - 2 events"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(events_search, {
                onSearch: findEventsHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_list/* default */.Z, {
                items: events.data
            })
        ]
    }));
}
async function getStaticProps() {
    const events = await (0,api_util/* getAllEvents */.IP)();
    return {
        props: {
            events
        },
        revalidate: 60
    };
}
/* harmony default export */ const events = (AllEventsPage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,611,57,968], () => (__webpack_exec__(1812)));
module.exports = __webpack_exports__;

})();