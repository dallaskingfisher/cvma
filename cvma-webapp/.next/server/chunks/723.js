exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 6076:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "event-update_background__sJcjo",
	"control": "event-update_control__BQKEK",
	"actions": "event-update_actions__sZUyq",
	"button": "event-update_button__NKi1H",
	"toggle": "event-update_toggle__OAja2",
	"error": "event-update_error___twwA"
};


/***/ }),

/***/ 6723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_update_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var _event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_update_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function EventUpdate() {
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const descrptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const addressOneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const addressTwoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const featureRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: saved , 1: setSaved  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    let savedMessage;
    async function submitHandler(event) {
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descrptionRef.current.value;
        const addressOne = addressOneRef.current.value;
        const addressTwo = addressTwoRef.current.value;
        const date = dateRef.current.value;
        const image = imageRef.current.value;
        const feature = featureRef.current.value;
        const response = await fetch('/api/events/eventsupdate', {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                addressOne,
                addressTwo,
                date,
                feature,
                image
            }),
            headers: {
                "Content-Type": "application/JSON"
            }
        });
        const data = await response.json();
        if (response.ok) {
            setSaved(data.message);
            savedMessage = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),
                children: saved
            });
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().background),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Add New Event"
            }),
            savedMessage,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "title",
                                children: "Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "title",
                                required: true,
                                ref: titleRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "description",
                                children: "Event Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "description",
                                required: true,
                                ref: descrptionRef,
                                rows: "10",
                                cols: "40"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "addressOne",
                                children: "Address 1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "addressOne",
                                required: true,
                                ref: addressOneRef,
                                placeholder: "Street Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "addressTwo",
                                children: "Address 2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "addressTwo",
                                required: true,
                                ref: addressTwoRef,
                                placeholder: "City State Zip"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "eventType",
                                children: "Event Type"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().select),
                                id: "eventType",
                                name: "eventType",
                                ref: imageRef,
                                required: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "images/Skully.png",
                                        children: "Chapter events"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "images/events/fullPatch.jpeg",
                                        children: "State/Regional/National Events"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "images/events/pokerRun.png",
                                        children: "Poker Runs"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "date",
                                children: "Date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "date",
                                required: true,
                                ref: dateRef
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "feature",
                                children: "Public Event"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "feature",
                                name: "feature",
                                value: "false",
                                ref: featureRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: (_event_update_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
                            children: "Add Evnet"
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventUpdate);


/***/ })

};
;