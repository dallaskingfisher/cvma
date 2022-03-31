(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 2:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "memberNew_background__W9pF1",
	"control": "memberNew_control__z5XFL",
	"actions": "memberNew_actions__H8iMT",
	"button": "memberNew_button__MSmdh",
	"toggle": "memberNew_toggle__unAbV",
	"error": "memberNew_error__gHqH0"
};


/***/ }),

/***/ 5999:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "memberUpdate_background__iRCDq",
	"control": "memberUpdate_control__MQ_8J",
	"actions": "memberUpdate_actions__h8snj",
	"button": "memberUpdate_button___kPM5",
	"toggle": "memberUpdate_toggle__3xUaV",
	"error": "memberUpdate_error___eoPo",
	"state": "memberUpdate_state__S6h74"
};


/***/ }),

/***/ 9855:
/***/ ((module) => {

// Exports
module.exports = {
	"adminouterbox": "member_adminouterbox__A17pV",
	"memberNew": "member_memberNew__TwM3_",
	"memberUpdate": "member_memberUpdate__mwcTV"
};


/***/ }),

/***/ 2307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ members),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./components/events/update/event-update.js
var event_update = __webpack_require__(6723);
// EXTERNAL MODULE: ./components/members/memberUpdate.module.css
var memberUpdate_module = __webpack_require__(5999);
var memberUpdate_module_default = /*#__PURE__*/__webpack_require__.n(memberUpdate_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/members/memberUpdate.js



function MemberUpdate(props) {
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)();
    const firstName = props.user.firstName;
    const lastName = props.user.lastName;
    const cellPhone = props.user.cellPhone;
    const homePhone = props.user.homePhone;
    const address = props.user.address;
    const city = props.user.city;
    const state = props.user.state;
    const zip = props.user.zip;
    const roadName = props.user.roadName;
    const iceName = props.user.iceName;
    const iceNumber = props.user.iceNumber;
    const email = props.user.email;
    const memberId = props.user.memberId;
    const roadNameUpdateRef = (0,external_react_.useRef)();
    const cellPhoneUpdateRef = (0,external_react_.useRef)();
    const homePhoneUpdateRef = (0,external_react_.useRef)();
    const addressUpdateRef = (0,external_react_.useRef)();
    const cityUpdateRef = (0,external_react_.useRef)();
    const stateUpdateRef = (0,external_react_.useRef)();
    const zipUpdateRef = (0,external_react_.useRef)();
    const iceNameUpdateRef = (0,external_react_.useRef)();
    const iceNumberUpdateRef = (0,external_react_.useRef)();
    const emailUpdateRef = (0,external_react_.useRef)();
    async function updateMemberHandler(event) {
        event.preventDefault();
        let roadNameUpdate = roadNameUpdateRef.current.value;
        let cellPhoneUpdate = cellPhoneUpdateRef.current.value;
        let homePhoneUpdate = homePhoneUpdateRef.current.value;
        let addressUpdate = addressUpdateRef.current.value;
        let cityUpdate = cityUpdateRef.current.value;
        let stateUpdate = stateUpdateRef.current.value;
        let zipUpdate = zipUpdateRef.current.value;
        let iceNameUpdate = iceNameUpdateRef.current.value;
        let iceNumberUpdate = iceNumberUpdateRef.current.value;
        let emailUpdate = emailUpdateRef.current.value;
        //================================================================
        // write if condition for empty varialbes
        //================================================================
        if (!roadNameUpdate) {
            roadNameUpdate = roadName;
        }
        if (!cellPhoneUpdate) {
            cellPhoneUpdate = cellPhone;
        }
        if (!homePhoneUpdate) {
            homePhoneUpdate = homePhone;
        }
        if (!addressUpdate) {
            addressUpdate = address;
        }
        if (!cityUpdate) {
            cityUpdate = city;
        }
        if (!stateUpdate) {
            stateUpdate = state;
        }
        if (!zipUpdate) {
            zipUpdate = zip;
        }
        if (!emailUpdate) {
            emailUpdate = email;
        }
        if (!iceNameUpdate) {
            iceNameUpdate = iceName;
        }
        if (!iceNumberUpdate) {
            iceNumberUpdate = iceNumber;
        }
        const response = await fetch("/api/members/memberUpdate", {
            method: "POST",
            body: JSON.stringify({
                memberId,
                roadNameUpdate,
                cellPhoneUpdate,
                homePhoneUpdate,
                iceNameUpdate,
                iceNumberUpdate,
                addressUpdate,
                cityUpdate,
                stateUpdate,
                zipUpdate,
                emailUpdate
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        const responseMessage = /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (memberUpdate_module_default()).error,
            children: data.message
        });
        setMessage(responseMessage);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (memberUpdate_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Member Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    message ? message : '',
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            memberId,
                            " ",
                            firstName,
                            " ",
                            lastName
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: updateMemberHandler,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberUpdate_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "roadName",
                                        children: "Road Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "roadName",
                                        id: "roadName",
                                        placeholder: roadName,
                                        ref: roadNameUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "email",
                                        children: "Email:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "email",
                                        id: "email",
                                        placeholder: email,
                                        ref: emailUpdateRef
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberUpdate_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "address",
                                        children: "Address:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "address",
                                        id: "address",
                                        placeholder: address,
                                        ref: addressUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "city",
                                        children: "City:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "city",
                                        id: "city",
                                        placeholder: city,
                                        ref: cityUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "state",
                                        children: "State:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "state",
                                        id: "state",
                                        placeholder: state,
                                        ref: stateUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "zip",
                                        children: "Zip: "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "zip",
                                        id: "name",
                                        placeholder: zip,
                                        ref: zipUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "homePhone",
                                        children: "Home Phone Number:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "homePhone",
                                        id: "homePhone",
                                        placeholder: homePhone,
                                        ref: homePhoneUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "cellPhone",
                                        children: "Cell Phone Number"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "cellPhone",
                                        id: "cellPhone",
                                        placeholder: cellPhone,
                                        ref: cellPhoneUpdateRef
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberUpdate_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "iceName",
                                        children: "ICE Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "iceName",
                                        id: "iceName",
                                        placeholder: iceName,
                                        ref: iceNameUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "iceNumber",
                                        children: "ICE Phone Number:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "iceNumber",
                                        id: "iceNumber",
                                        placeholder: iceNumber,
                                        ref: iceNumberUpdateRef
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: (memberUpdate_module_default()).button,
                                children: "Update!"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const memberUpdate = (MemberUpdate);

// EXTERNAL MODULE: ./components/members/memberNew.module.css
var memberNew_module = __webpack_require__(2);
var memberNew_module_default = /*#__PURE__*/__webpack_require__.n(memberNew_module);
;// CONCATENATED MODULE: ./components/members/memberNew.js



function MemberNew() {
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)();
    const memberIdRef = (0,external_react_.useRef)();
    const roadNameUpdateRef = (0,external_react_.useRef)();
    const cellPhoneUpdateRef = (0,external_react_.useRef)();
    const homePhoneUpdateRef = (0,external_react_.useRef)();
    const addressUpdateRef = (0,external_react_.useRef)();
    const cityUpdateRef = (0,external_react_.useRef)();
    const stateUpdateRef = (0,external_react_.useRef)();
    const zipUpdateRef = (0,external_react_.useRef)();
    const iceNameUpdateRef = (0,external_react_.useRef)();
    const iceNumberUpdateRef = (0,external_react_.useRef)();
    const emailUpdateRef = (0,external_react_.useRef)();
    const firstNameRef = (0,external_react_.useRef)();
    const lastNameRef = (0,external_react_.useRef)();
    const roleRef = (0,external_react_.useRef)();
    async function newMemberHandler(event) {
        event.preventDefault();
        const memberId = memberIdRef.current.value;
        const roadNameUpdate = roadNameUpdateRef.current.value;
        const cellPhoneUpdate = cellPhoneUpdateRef.current.value;
        const homePhoneUpdate = homePhoneUpdateRef.current.value;
        const addressUpdate = addressUpdateRef.current.value;
        const cityUpdate = cityUpdateRef.current.value;
        const stateUpdate = stateUpdateRef.current.value;
        const zipUpdate = zipUpdateRef.current.value;
        const iceNameUpdate = iceNameUpdateRef.current.value;
        const iceNumberUpdate = iceNumberUpdateRef.current.value;
        const emailUpdate = emailUpdateRef.current.value;
        const response = await fetch("/api/members/memberNew", {
            method: "POST",
            body: JSON.stringify({
                memberId,
                roadNameUpdate,
                cellPhoneUpdate,
                homePhoneUpdate,
                iceNameUpdate,
                iceNumberUpdate,
                addressUpdate,
                cityUpdate,
                stateUpdate,
                zipUpdate,
                emailUpdate,
                lastName,
                fisrtName,
                role
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if (data.message) {
            const responseMessage = /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (memberNew_module_default()).error,
                children: "Member Added"
            });
            setMessage(responseMessage);
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (memberNew_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Member Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    message ? message : "",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "New Member"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: newMemberHandler,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberNew_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "memberNumber",
                                        children: "Member Number"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "memberNumber",
                                        id: "memberNumber",
                                        ref: memberIdRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "firstName",
                                        children: "First Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "firstName",
                                        id: "firstName",
                                        ref: firstNameRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "lastName",
                                        children: "Last Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "lastName",
                                        id: "lastName",
                                        ref: lastNameRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "roadName",
                                        children: "Road Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "roadName",
                                        id: "roadName",
                                        ref: roadNameUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "email",
                                        children: "Email:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "email",
                                        id: "email",
                                        ref: emailUpdateRef
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberNew_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "address",
                                        children: "Address:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "address",
                                        id: "address",
                                        ref: addressUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "city",
                                        children: "City:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "city",
                                        id: "city",
                                        ref: cityUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "state",
                                        children: "State:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "state",
                                        id: "state",
                                        ref: stateUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "zip",
                                        children: "Zip: "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "zip",
                                        id: "name",
                                        ref: zipUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "homePhone",
                                        children: "Home Phone Number:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "homePhone",
                                        id: "homePhone",
                                        ref: homePhoneUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "cellPhone",
                                        children: "Cell Phone Number"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "cellPhone",
                                        id: "cellPhone",
                                        ref: cellPhoneUpdateRef
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (memberNew_module_default()).control,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "iceName",
                                        children: "ICE Name:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "iceName",
                                        id: "iceName",
                                        ref: iceNameUpdateRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "iceNumber",
                                        children: "ICE Phone Number:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "iceNumber",
                                        id: "iceNumber",
                                        ref: iceNumberUpdateRef
                                    }),
                                    "             Role select option"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: (memberNew_module_default()).button,
                                children: "Update!"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const memberNew = (MemberNew);

// EXTERNAL MODULE: ./styles/member.module.css
var member_module = __webpack_require__(9855);
var member_module_default = /*#__PURE__*/__webpack_require__.n(member_module);
;// CONCATENATED MODULE: ./pages/members/index.js






function Members(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Members Area"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (member_module_default()).adminouterbox,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (member_module_default()).memberUpdate,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(memberUpdate, {
                        user: props.member
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Doucuments"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (member_module_default()).adminouterbox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(event_update/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (member_module_default()).memberNew,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(memberNew, {})
                    })
                ]
            })
        ]
    }));
}
async function getServerSideProps(context) {
    const session = await (0,client_.getSession)({
        req: context.req
    });
    const members = await fetch("http://localhost:3000/api/members/memberUpdate").then((response)=>response.json()
    );
    const member = members.data.find((element)=>element.memberId === session.user.name
    );
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    return {
        props: {
            session,
            members: members,
            member: member
        }
    };
}
/* harmony default export */ const members = (Members);


/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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
var __webpack_exports__ = __webpack_require__.X(0, [723], () => (__webpack_exec__(2307)));
module.exports = __webpack_exports__;

})();