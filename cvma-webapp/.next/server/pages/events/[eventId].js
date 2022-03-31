(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 5979:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "event-content_content__N8f4Q"
};


/***/ }),

/***/ 3920:
/***/ ((module) => {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__nnLSE",
	"image": "event-logistics_image__cldYm",
	"list": "event-logistics_list__flNvw"
};


/***/ }),

/***/ 577:
/***/ ((module) => {

// Exports
module.exports = {
	"summary": "event-summary_summary__rmm9D"
};


/***/ }),

/***/ 1207:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "logistics-item_item__jiFzn",
	"icon": "logistics-item_icon__o2W_d"
};


/***/ }),

/***/ 7998:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comment-list_comments__IGYva"
};


/***/ }),

/***/ 4735:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comments_comments__DvCYh"
};


/***/ }),

/***/ 6985:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "new-comment_form__StHMs",
	"row": "new-comment_row__6RSMo",
	"control": "new-comment_control__dwipg"
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

/***/ 3991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _eventId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(8611);
// EXTERNAL MODULE: ./components/event-detail/event-summary.module.css
var event_summary_module = __webpack_require__(577);
var event_summary_module_default = /*#__PURE__*/__webpack_require__.n(event_summary_module);
;// CONCATENATED MODULE: ./components/event-detail/event-summary.js


function EventSummary(props) {
    const { title  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_summary_module_default()).summary,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: title
        })
    }));
}
/* harmony default export */ const event_summary = (EventSummary);

// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(3467);
// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(8624);
// EXTERNAL MODULE: ./components/event-detail/logistics-item.module.css
var logistics_item_module = __webpack_require__(1207);
var logistics_item_module_default = /*#__PURE__*/__webpack_require__.n(logistics_item_module);
;// CONCATENATED MODULE: ./components/event-detail/logistics-item.js


function LogisticsItem(props) {
    const { icon: Icon  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (logistics_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).content,
                children: props.children
            })
        ]
    }));
}
/* harmony default export */ const logistics_item = (LogisticsItem);

// EXTERNAL MODULE: ./components/event-detail/event-logistics.module.css
var event_logistics_module = __webpack_require__(3920);
var event_logistics_module_default = /*#__PURE__*/__webpack_require__.n(event_logistics_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/event-detail/event-logistics.js






function EventLogistics(props) {
    const { date , address , image , imageAlt  } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const addressText = address.replace('-', '\n');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (event_logistics_module_default()).logistics,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (event_logistics_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: `/${image}`,
                    alt: imageAlt,
                    width: 150,
                    height: 150
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (event_logistics_module_default()).list,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logistics_item, {
                        icon: date_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                            children: humanReadableDate
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(logistics_item, {
                        icon: address_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: addressText
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const event_logistics = (EventLogistics);

// EXTERNAL MODULE: ./components/event-detail/event-content.module.css
var event_content_module = __webpack_require__(5979);
var event_content_module_default = /*#__PURE__*/__webpack_require__.n(event_content_module);
;// CONCATENATED MODULE: ./components/event-detail/event-content.js


function EventContent(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_content_module_default()).content,
        children: props.children
    }));
}
/* harmony default export */ const event_content = (EventContent);

// EXTERNAL MODULE: ./components/ui/error-alert.js
var error_alert = __webpack_require__(8407);
// EXTERNAL MODULE: ./components/input/comment-list.module.css
var comment_list_module = __webpack_require__(7998);
var comment_list_module_default = /*#__PURE__*/__webpack_require__.n(comment_list_module);
;// CONCATENATED MODULE: ./components/input/comment-list.js


function CommentList(props) {
    const { items  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (comment_list_module_default()).comments,
        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "By ",
                            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                children: item.name
                            })
                        ]
                    })
                ]
            }, item._id)
        )
    }));
}
/* harmony default export */ const comment_list = (CommentList);

// EXTERNAL MODULE: ./components/input/new-comment.module.css
var new_comment_module = __webpack_require__(6985);
var new_comment_module_default = /*#__PURE__*/__webpack_require__.n(new_comment_module);
;// CONCATENATED MODULE: ./components/input/new-comment.js



function NewComment(props) {
    const { 0: isInvalid , 1: setIsInvalid  } = (0,external_react_.useState)(false);
    const emailInputRef = (0,external_react_.useRef)();
    const nameInputRef = (0,external_react_.useRef)();
    const commentInputRef = (0,external_react_.useRef)();
    function sendCommentHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredComment = commentInputRef.current.value;
        if (!enteredEmail || enteredEmail.trim() === '' || !enteredEmail.includes('@') || !enteredName || enteredName.trim() === '' || !enteredComment || enteredComment.trim() === '') {
            setIsInvalid(true);
            return;
        }
        props.onAddComment({
            email: enteredEmail,
            name: enteredName,
            text: enteredComment
        });
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (new_comment_module_default()).form,
        onSubmit: sendCommentHandler,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_comment_module_default()).row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (new_comment_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                children: "Your email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                ref: emailInputRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (new_comment_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "name",
                                children: "Your name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "name",
                                ref: nameInputRef
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_comment_module_default()).control,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "comment",
                        children: "Your comment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        id: "comment",
                        rows: "5",
                        ref: commentInputRef
                    })
                ]
            }),
            isInvalid && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Please enter a valid email address and comment!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                children: "Submit"
            })
        ]
    }));
}
/* harmony default export */ const new_comment = (NewComment);

// EXTERNAL MODULE: ./components/input/comments.module.css
var comments_module = __webpack_require__(4735);
var comments_module_default = /*#__PURE__*/__webpack_require__.n(comments_module);
;// CONCATENATED MODULE: ./components/input/comments.js





function Comments(props) {
    const { eventId , firstName , lastName  } = props;
    const { 0: showComments , 1: setShowComments  } = (0,external_react_.useState)(false);
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (showComments) {
            fetch(`/api/comments/${eventId}`).then((response)=>response.json()
            ).then((data)=>{
                setComments(data.comments);
            });
        }
    }, [
        showComments
    ]);
    function toggleCommentsHandler() {
        setShowComments((prevStatus)=>!prevStatus
        );
    }
    function addCommentHandler(commentData) {
        // send data to API
        console.log(eventId, firstName, lastName);
        fetch(`/api/comments/${eventId}`, {
            method: "POST",
            body: JSON.stringify(commentData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()
        ).then((data)=>console.log(data)
        );
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (comments_module_default()).comments,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: toggleCommentsHandler,
                children: [
                    showComments ? "Hide" : "Show",
                    " Comments"
                ]
            }),
            showComments && /*#__PURE__*/ jsx_runtime_.jsx(new_comment, {
                onAddComment: addCommentHandler
            }),
            showComments && /*#__PURE__*/ jsx_runtime_.jsx(comment_list, {
                items: comments
            })
        ]
    }));
}
/* harmony default export */ const comments = (Comments);

;// CONCATENATED MODULE: ./pages/events/[eventId].js











function EventDetailPage(props) {
    const router = (0,router_.useRouter)();
    const event = props.selectedEvent;
    (0,external_react_.useEffect)(()=>{
        (0,client_.getSession)().then((session)=>{
            if (!session) {
                router.replace('/login');
            }
        });
    }, [
        router
    ]);
    if (!event) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Loading..."
            })
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `CVMA 18 - 2 ${event.title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: event.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_summary, {
                title: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_logistics, {
                date: event.date,
                address: event.address,
                image: event.image,
                imageAlt: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_content, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: event.description
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(comments, {
                eventId: event._id
            })
        ]
    }));
}
async function getStaticProps(context) {
    const eventId = context.params.eventid;
    const event = await (0,api_util/* getEventById */.Y)(eventId);
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
}
async function getStaticPaths() {
    const events = await (0,api_util/* getFeaturedEvents */.N6)();
    const paths = events.map((event)=>({
            params: {
                eventId: event._id
            }
        })
    );
    return {
        paths: paths,
        fallback: 'blocking'
    };
}
/* harmony default export */ const _eventId_ = (EventDetailPage);


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

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,675,611,57], () => (__webpack_exec__(3991)));
module.exports = __webpack_exports__;

})();