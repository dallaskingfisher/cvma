(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 4145:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "documents_background__5LZ7Y",
	"control": "documents_control__GK6xy",
	"actions": "documents_actions__DRQUI",
	"button": "documents_button__I6VOY",
	"toggle": "documents_toggle__iej3Y",
	"error": "documents_error__oSEnt"
};


/***/ }),

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

/***/ 3489:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "upload_background__a6nJx",
	"control": "upload_control__nM95v",
	"actions": "upload_actions__TvgMD",
	"button": "upload_button__FuH2J",
	"toggle": "upload_toggle___p3lt",
	"error": "upload_error__ZLl2O"
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

/***/ 3737:
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
;// CONCATENATED MODULE: external "next-s3-upload"
const external_next_s3_upload_namespaceObject = require("next-s3-upload");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/upload/upload.module.css
var upload_module = __webpack_require__(3489);
var upload_module_default = /*#__PURE__*/__webpack_require__.n(upload_module);
;// CONCATENATED MODULE: ./components/upload/upload.js




function UploadFiles() {
    const { FileInput , openFileDialog , uploadToS3  } = (0,external_next_s3_upload_namespaceObject.useS3Upload)();
    const { 0: location , 1: setLocation  } = (0,external_react_.useState)();
    const { 0: dbUpload , 1: setDbUpload  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)();
    const { 0: onMessage , 1: setOnMessage  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setDbUpload(false);
        const timer = setTimeout(()=>setLocation(null)
        , 2000);
        return ()=>clearTimeout(timer)
        ;
    }, [
        dbUpload
    ]);
    (0,external_react_.useEffect)(()=>{
        setOnMessage(false);
        const messageTimer = setTimeout(()=>setMessage(null)
        , 10000);
        return ()=>clearTimeout(messageTimer)
        ;
    }, [
        onMessage
    ]);
    const handleFileChange = async (file)=>{
        let { url  } = await uploadToS3(file);
        setLocation(url);
    };
    const catRef = (0,external_react_.useRef)();
    const monthRef = (0,external_react_.useRef)();
    const yearRef = (0,external_react_.useRef)();
    const fileNameRef = (0,external_react_.useRef)();
    function clearFields() {
        const formField = document.getElementById("uploadForm");
        formField.reset();
    }
    async function submitHandler(event) {
        event.preventDefault();
        const category = catRef.current.value;
        const month = monthRef.current.value;
        const year = yearRef.current.value;
        const fileName = fileNameRef.current.value;
        const address = location;
        if (address === null) {
            setMessage("File not loaded");
            setOnMessage(true);
            return;
        } else {
            let data = {
                category: category,
                month: month,
                year: year,
                title: fileName,
                location: address
            };
            const response = await fetch("/api/document/upload", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const resposneData = await response.json();
            clearFields();
            console.log(data);
            setMessage(resposneData.message);
            setOnMessage(true);
            setDbUpload(true);
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (upload_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Upload"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FileInput, {
                onChange: handleFileChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: openFileDialog,
                className: (upload_module_default()).button,
                children: "Upload"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: submitHandler,
                id: "uploadForm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (upload_module_default()).control,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "fileTypes",
                            ref: catRef,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "meetingMinutes",
                                    children: "Meeting Minutes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "cebMinutes",
                                    children: "CEB Minutes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "roadCaptain",
                                    children: "Road Captains"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (upload_module_default()).control,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "month",
                            ref: monthRef,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jan",
                                    children: "January"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "feb",
                                    children: "Febuary"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "mar",
                                    children: "March"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "apr",
                                    children: "April"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "may",
                                    children: "May"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jun",
                                    children: "June"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jul",
                                    children: "July"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "aug",
                                    children: "August"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "sep",
                                    children: "September"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "oct",
                                    children: "October"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "nov",
                                    children: "November"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "dec",
                                    children: "December"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (upload_module_default()).control,
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Year",
                                id: "year",
                                ref: yearRef,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (upload_module_default()).control,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "File Name",
                            id: "fileName",
                            ref: fileNameRef,
                            required: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        id: "submit",
                        className: (upload_module_default()).button,
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: location
            })
        ]
    }));
}
/* harmony default export */ const upload = (UploadFiles);

// EXTERNAL MODULE: ./components/members/memberUpdate.module.css
var memberUpdate_module = __webpack_require__(5999);
var memberUpdate_module_default = /*#__PURE__*/__webpack_require__.n(memberUpdate_module);
;// CONCATENATED MODULE: ./components/members/memberUpdate.js



function MemberUpdate(props) {
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)();
    const { 0: messageOn , 1: setMessageOn  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMessageOn(false);
        const timer = setTimeout(()=>setMessage(null)
        , 10000);
        return ()=>clearTimeout(timer)
        ;
    }, [
        messageOn
    ]);
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
    const clearFields = ()=>{
        const formField = document.getElementById('memberUpdateForm');
        formField.reset();
    };
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
        clearFields();
        const responseMessage = /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (memberUpdate_module_default()).error,
            children: data.message
        });
        setMessage(responseMessage);
        setMessageOn(true);
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
                        id: "memberUpdateForm",
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
    const { 0: on , 1: setOn  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>setMessage(null)
        , 7000);
        return ()=>clearTimeout(timer)
        ;
    }, [
        on
    ]);
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
    const clearFields = ()=>{
        const clearField = document.getElementById('newMemberForm');
        clearField.reset();
    };
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
        const lastNameUpdate = lastNameRef.current.value;
        const firstNameUpdate = firstNameRef.current.value;
        const role = roleRef.current.value;
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
                lastNameUpdate,
                firstNameUpdate,
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
            setOn(true);
            setMessage(responseMessage);
        }
        clearFields();
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (memberNew_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Member Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    message,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "New Member"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: newMemberHandler,
                        id: "newMemberForm",
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
                                        id: "zip",
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
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "role",
                                        children: "Role:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        name: "role",
                                        id: "role",
                                        ref: roleRef,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "admin",
                                                children: "Administrator"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "member",
                                                children: "Member"
                                            })
                                        ]
                                    })
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

// EXTERNAL MODULE: ./components/documents/documents.module.css
var documents_module = __webpack_require__(4145);
var documents_module_default = /*#__PURE__*/__webpack_require__.n(documents_module);
;// CONCATENATED MODULE: ./components/documents/documents.js



function Documents() {
    const { 0: years , 1: setYears  } = (0,external_react_.useState)([]);
    const { 0: docs1 , 1: setDocs  } = (0,external_react_.useState)([]);
    const { 0: results , 1: setResults  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        fetch('/api/document/years').then((res)=>res.json()
        ).then((data)=>setYears(data.yearsArray)
        );
        fetch('/api/document/').then((res)=>res.json()
        ).then((data)=>setDocs(data.docsArray)
        );
    }, []);
    const refreshHandler = (e)=>{
        e.preventDefault();
        fetch('/api/document/years').then((res)=>res.json()
        ).then((data)=>setYears(data.yearsArray)
        );
        fetch('/api/document/').then((res)=>res.json()
        ).then((data)=>setDocs(data.docsArray)
        );
    };
    const getMinutes = (docs, cat, year, month)=>{
        let catArray = [];
        let yearArray = [];
        let docsArray = [];
        for(let i = 0; i < docs.length; i++){
            if (docs[i][0] === cat) {
                catArray.push([
                    docs[i][0],
                    docs[i][1],
                    docs[i][2],
                    docs[i][3],
                    docs[i][4]
                ]);
            }
        }
        for(let i1 = 0; i1 < catArray.length; i1++){
            if (catArray[i1][2] === year) {
                yearArray.push([
                    catArray[i1][0],
                    catArray[i1][1],
                    catArray[i1][2],
                    catArray[i1][3],
                    catArray[i1][4]
                ]);
            }
        }
        for(let i2 = 0; i2 < yearArray.length; i2++){
            if (yearArray[i2][1] === month) {
                docsArray.push([
                    yearArray[i2][0],
                    yearArray[i2][1],
                    yearArray[i2][2],
                    yearArray[i2][3],
                    yearArray[i2][4]
                ]);
            }
        }
        return docsArray;
    };
    const getOtherDocs = (docs, cat)=>{
        const docsArray = [];
        for(let i = 0; i < docs.length; i++){
            if (docs[i][0] === cat) {
                docsArray.push([
                    docs[i][0],
                    docs[i][1],
                    docs[i][2],
                    docs[i][3],
                    docs[i][4]
                ]);
            }
        }
        return docsArray;
    };
    const catRef = (0,external_react_.useRef)();
    const yearRef = (0,external_react_.useRef)();
    const monthRef = (0,external_react_.useRef)();
    function submitHandler(event) {
        event.preventDefault();
        const cat = catRef.current.value;
        const year = yearRef.current.value;
        const month = monthRef.current.value;
        console.log(docs1);
        console.log(cat);
        console.log(year);
        console.log(month);
        switch(cat){
            case 'meetingMinutes':
                const data1 = getMinutes(docs1, cat, year, month);
                console.log(data1);
                setResults(data1);
                break;
            case "cebMinutes":
                const data2 = getMinutes(docs1, cat, year, month);
                setResults(data2);
                break;
            default:
                const data3 = getOtherDocs(docs1, cat);
                setResults(data3);
        }
    }
    if (!results) {} else {
        const values = [];
        for(let i = 0; i < results.length; i++){
            values.push(results[i][3], results[i][4]);
        }
    }
    //VALUES MUST MATCH UPLOAD.JS FOR CATEGORY DROP DOWN AND VERIFY THE MATCH BEFORE ADDING TO PRODUCTION!!
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (documents_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Documents"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: refreshHandler,
                className: (documents_module_default()).button,
                children: "Refresh"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                id: "getDocs",
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (documents_module_default()).control,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "category",
                            ref: catRef,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "meetingMinutes",
                                    children: "Meeting Minutes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "cebMinutes",
                                    children: "CEB Minutes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "roadCaptain",
                                    children: "Road Captain"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (documents_module_default()).control,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            id: "yearlist",
                            ref: yearRef,
                            children: years.map((year)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: year,
                                    children: year
                                })
                            )
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (documents_module_default()).control,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "months",
                            ref: monthRef,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jan",
                                    children: "January"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "feb",
                                    children: "Febuary"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "Mar",
                                    children: "March"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "apr",
                                    children: "April"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "may",
                                    children: "May"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jun",
                                    children: "June"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "jul",
                                    children: "July"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "aug",
                                    children: "August"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "sep",
                                    children: "September"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "oct",
                                    children: "October"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "nov",
                                    children: "November"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "dec",
                                    children: "December"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (documents_module_default()).button,
                            children: "Submit"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: !results ? '' : results.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: value[4],
                        children: value[3]
                    })
                )
            })
        ]
    }));
}
/* harmony default export */ const documents = (Documents);

// EXTERNAL MODULE: ./styles/member.module.css
var member_module = __webpack_require__(9855);
var member_module_default = /*#__PURE__*/__webpack_require__.n(member_module);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./helpers/db-util.js

const db_util_password = 'bunbuns2022';
const database = 'cvma';
async function connectDatabase() {
    const client = await external_mongodb_namespaceObject.MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test.3r6zb.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`);
    return client;
}
async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    client.close();
    return result;
}
async function findComments(client, collection, sort, filter) {
    const db = client.db();
    const document = await db.collection(collection).find(filter).sort(sort).toArray();
    return document;
}

;// CONCATENATED MODULE: ./pages/members/index.js








function Members(props) {
    const membersObj = JSON.parse(props.members);
    const member = membersObj.find((element)=>element.memberId === props.session.user.name
    );
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
                        user: member
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (member_module_default()).adminouterbox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(upload, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(documents, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(memberNew, {})
                ]
            })
        ]
    }));
}
async function getServerSideProps(context) {
    const session = await (0,client_.getSession)({
        req: context.req
    });
    const client = await connectDatabase();
    const collection = client.db().collection("members");
    const data = await collection.find({}).toArray();
    const members = JSON.stringify(data);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            session,
            members: members
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
var __webpack_exports__ = (__webpack_exec__(3737));
module.exports = __webpack_exports__;

})();