(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1055:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-header_header__LZcDE",
	"image": "main-header_image__UUaNG",
	"menuButton": "main-header_menuButton__sGfq3",
	"links": "main-header_links__JPa3N",
	"ulItems": "main-header_ulItems__YRQNH",
	"linkItems": "main-header_linkItems__ltFQq",
	"aItems": "main-header_aItems__hZ4FV"
};


/***/ }),

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/layout/main-header.module.css
var main_header_module = __webpack_require__(1055);
var main_header_module_default = /*#__PURE__*/__webpack_require__.n(main_header_module);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
;// CONCATENATED MODULE: ./components/layout/main-header.js







function MainHeader() {
    const [session, loading] = (0,client_.useSession)();
    const { 0: menuOpen , 1: setMenuOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    function logoutHandler() {
        router.push('/');
        (0,client_.signOut)();
    }
    function menuHandler(event) {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    }
    const menuList = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (main_header_module_default()).aItems,
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.combatvet.us",
                    className: (main_header_module_default()).aItems,
                    children: "National"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "http://cvma18.cvma182.org",
                    className: (main_header_module_default()).aItems,
                    children: "State"
                })
            }),
            !session && !loading && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (main_header_module_default()).aItems,
                        children: "Login"
                    })
                })
            }),
            session && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/members",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (main_header_module_default()).aItems,
                        children: "Members"
                    })
                })
            }),
            session && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (main_header_module_default()).linkItems,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (main_header_module_default()).aItems,
                        onClick: logoutHandler,
                        children: "Logout"
                    })
                })
            })
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (main_header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_header_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: '/images/Skully.png',
                    alt: "Skully 18-2",
                    width: "75",
                    height: "75"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (main_header_module_default()).links,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (main_header_module_default()).ulItems,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (main_header_module_default()).linkItems,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (main_header_module_default()).menuButton,
                                onClick: menuHandler,
                                children: menuOpen ? 'Close' : 'Menu'
                            })
                        }),
                        menuOpen ? menuList : ''
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const main_header = (MainHeader);

;// CONCATENATED MODULE: ./components/layout/layout.js



function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(main_header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            })
        ]
    }));
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "CVMA 18 - 2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Combat Veterans Motorcycle Assocation 18 -2 out of Clarksville, Tennessee. We are a nonprofit group that is a 501c3 that raise money for local veterans charities."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675], () => (__webpack_exec__(512)));
module.exports = __webpack_exports__;

})();