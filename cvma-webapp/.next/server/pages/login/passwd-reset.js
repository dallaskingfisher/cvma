(() => {
var exports = {};
exports.id = 878;
exports.ids = [878];
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

/***/ 5803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login_passwd_reset)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/login/login.module.css
var login_module = __webpack_require__(9676);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/login/passwd-reset.js




/* plan to redirect after succussful reset to login page */ async function resetPasswd(memberNumber, email, address, passwd, passwdVerify) {
    const response = await fetch("/api/login/reset", {
        method: "POST",
        body: JSON.stringify({
            memberNumber,
            email,
            address,
            passwd,
            passwdVerify
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    if (!response.ok) {
        return data.message;
    }
    return data.message;
}
function PasswordReset() {
    const { 0: hasError , 1: setHasError  } = (0,external_react_.useState)();
    const memberNumberRef = (0,external_react_.useRef)();
    const passwdRef = (0,external_react_.useRef)();
    const passwdVerifyRef = (0,external_react_.useRef)();
    const emailRef = (0,external_react_.useRef)();
    const addressRef = (0,external_react_.useRef)();
    const router = (0,router_.useRouter)();
    async function passwordUpdateHandler(event) {
        event.preventDefault();
        setHasError('');
        const memberNumberVariable = memberNumberRef.current.value;
        const passwd = passwdRef.current.value;
        const passwdVerify = passwdVerifyRef.current.value;
        const emailVariable = emailRef.current.value;
        const addressVariable = addressRef.current.value;
        const memberNumber = memberNumberVariable.toUpperCase();
        const email = emailVariable.toLowerCase();
        const address = addressVariable.toLowerCase();
        //================================================================
        console.log(memberNumber, email, address);
        //================================================================
        if (memberNumber.includes("FM") || memberNumber.includes("AUX") || memberNumber.includes("S") || memberNumber.includes("SAUX")) {} else {
            setHasError("Member number must include FM, AUX, S, SAUX");
        }
        if (!email.includes("@")) {
            setHasError("Must be a valid email");
        }
        if (address.trim() === 0) {
            setHasError("Please put in address");
        }
        if (passwd !== passwdVerify) {
            setHasError("Passwords do not match");
        }
        if (!passwd.length >= 8) {
            setHasError("Password Must Be at Least 8 Characters Logn");
        }
        const response = await resetPasswd(memberNumber, email, address, passwd, passwdVerify);
        if (response) {
            setHasError(response);
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (login_module_default()).auth,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Password Reset"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (login_module_default()).error,
                children: hasError
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: passwordUpdateHandler,
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "address",
                                children: "Street Address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "address",
                                required: true,
                                ref: addressRef
                            })
                        ]
                    }),
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (login_module_default()).actions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: "Reset"
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const passwd_reset = (PasswordReset);

;// CONCATENATED MODULE: ./pages/login/passwd-reset.js


function Passwd() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(passwd_reset, {}));
}
/* harmony default export */ const login_passwd_reset = (Passwd);


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
var __webpack_exports__ = (__webpack_exec__(5803));
module.exports = __webpack_exports__;

})();