"use strict";
(() => {
var exports = {};
exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TR": () => (/* binding */ connectDatabase),
/* harmony export */   "qi": () => (/* binding */ insertDocument),
/* harmony export */   "i4": () => (/* binding */ findComments)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const password = 'bunbuns2022';
const database = 'cvma';
async function connectDatabase() {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://dallasking:bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority');
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


/***/ }),

/***/ 4982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);

async function handler(req, res) {
    const eventId = req.query.commentid;
    if (req.method === "POST") {
        const { email , name , text  } = req.body;
        let client;
        let result;
        try {
            client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        } catch (error) {
            res.status(500).json({
                message: 'Database Connection Failed'
            });
        }
        if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
            client.close();
            res.status(422).json({
                message: "Invalid Input"
            });
            return;
        }
        const newComment = {
            eventId: eventId,
            email: email,
            name: name,
            text: text
        };
        try {
            result = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .insertDocument */ .qi)(client, 'comments', newComment);
            console.log(result);
            res.status(201).json({
                message: result.message
            });
            client.close();
        } catch (error1) {
            res.status(500).json({
                message: 'Failed to insert Document'
            });
            client.close;
            return;
        }
    }
    if (req.method === "GET") {
        const eventId = req.query.commentid;
        let mongo;
        let documents;
        /*  connectDatabase().then((client) => {
      findComments(client, 'comments', {_id: -1})
    }).catch((err) => {message: 'comment failed.'})*/ try {
            mongo = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        } catch (error) {
            res.status(500).json({
                message: 'Failed to Connect to Database'
            });
            return;
        }
        try {
            documents = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .findComments */ .i4)(mongo, 'comments', {
                _id: -1
            }, {
                eventId: eventId
            });
            res.status(200).json({
                comments: documents
            });
            client.close();
        } catch (error2) {
            res.status(500).json({
                message: 'Faild to retrive documents'
            });
            client.close();
            return;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4982));
module.exports = __webpack_exports__;

})();