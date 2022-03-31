(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9676:
/***/ ((module) => {

// Exports
module.exports = {
	"auth": "login_auth__U4aLK",
	"control": "login_control__WzI3x",
	"actions": "login_actions__eSNq2",
	"toggle": "login_toggle__Eiffl",
	"error": "login_error__KNAtk"
};


/***/ }),

/***/ 9651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/login/login.module.css
var login_module = __webpack_require__(9676);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
;// CONCATENATED MODULE: ./components/login/login.js






//create registerUser function to update user in database
async function createPasswd(memNumber, email, passwd, passwdVerify) {
    const response = await fetch('/api/login/registerUser', {
        method: 'POST',
        body: JSON.stringify({
            memNumber,
            email,
            passwd,
            passwdVerify
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        return data.message;
    }
    return "OK";
}
function LoginSignup() {
    const { 0: isLogin , 1: setIsLogin  } = (0,external_react_.useState)(true);
    const { 0: hasError , 1: setHasError  } = (0,external_react_.useState)("");
    const memberNumberRef = (0,external_react_.useRef)();
    const emailRef = (0,external_react_.useRef)(" ");
    const passwdRef = (0,external_react_.useRef)();
    const passwdVerifyRef = (0,external_react_.useRef)(" ");
    const router = (0,router_.useRouter)();
    async function submitHandler(event) {
        event.preventDefault();
        const memberNumber = memberNumberRef.current.value;
        const passwd = passwdRef.current.value;
        const memNumber = memberNumber.toUpperCase();
        if (isLogin) {
            if (memNumber.includes("FM") || memNumber.includes("AUX") || memNumber.includes("S") || memNumber.includes("SAUX")) {} else {
                setHasError("Member number must include FM, AUX, S, SAUX");
            }
            const result = await (0,client_.signIn)("credentials", {
                redirect: false,
                memberNumber: memNumber,
                password: passwd
            });
            if (!result.error) {
                router.replace("/members");
            } else {
                setHasError(result.error);
            }
        } else {
            //form validation
            const email = emailRef.current.value;
            const passwdVerify = passwdVerifyRef.current.value;
            if (memNumber.includes("FM") || memNumber.includes("AUX") || memNumber.includes("S") || memNumber.includes("SAUX")) {} else {
                setHasError("Member number must include FM, AUX, S, SAUX");
            }
            if (!email.includes("@")) {
                setHasError("Must be a valid email");
            }
            if (passwd !== passwdVerify) {
                setHasError("Passwords do not Match");
            }
            if (!passwd.length >= 8) {
                setHasError("Password must be at leaset 8 charater long");
            }
            const message = await createPasswd(memNumber, email, passwd, passwdVerify);
            console.log(message);
            setHasError(message);
        }
    }
    function switchAuthModeHandler(event) {
        event.preventDefault();
        setIsLogin(!isLogin);
    }
    const registerEmail = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (login_module_default()).control,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "email",
                children: "Your Email"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "email",
                id: "email",
                required: true,
                ref: emailRef
            })
        ]
    });
    const registerVerifyPassword = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (login_module_default()).control,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "passwordVerify",
                children: "Your Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "password",
                id: "passwordVerify",
                required: true,
                ref: passwdVerifyRef
            })
        ]
    });
    const passwdReset = /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/login/passwd-reset",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: (login_module_default()).toggle,
            children: "Password Reset"
        })
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (login_module_default()).auth,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: isLogin ? "Login" : "Register"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (login_module_default()).error,
                children: hasError
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "memNumber",
                                children: "Member Number"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "memNumber",
                                required: true,
                                placeholder: "FM1234, AUX1234, S1234, SAUX1234",
                                ref: memberNumberRef
                            })
                        ]
                    }),
                    isLogin ? "" : registerEmail,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "password",
                                children: "Your Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "password",
                                id: "password",
                                required: true,
                                ref: passwdRef
                            })
                        ]
                    }),
                    isLogin ? "" : registerVerifyPassword,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_module_default()).actions,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: isLogin ? "Login" : "Register Account"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: (login_module_default()).toggle,
                                onClick: switchAuthModeHandler,
                                children: isLogin ? "Register new account" : "Login with existing account"
                            }),
                            isLogin ? passwdReset : ""
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const login = (LoginSignup);

;// CONCATENATED MODULE: ./pages/login/index.js


function Login() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(login, {})
    }));
}
/* harmony default export */ const pages_login = (Login);


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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664], () => (__webpack_exec__(9651)));
module.exports = __webpack_exports__;

})();