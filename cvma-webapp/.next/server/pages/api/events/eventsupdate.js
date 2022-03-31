"use strict";
(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
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

/***/ 8096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);

async function handler(req, res) {
    if (req.method === "POST") {
        const title = req.body.title;
        const description = req.body.description;
        const address = req.body.addressOne + "- " + req.body.addressTwo;
        const date = req.body.date;
        const feature = req.body.feature;
        const image = req.body.image;
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        const addEvent = client.db().collection("events");
        addEvent.insertOne({
            title: title,
            description: description,
            address: address,
            date: date,
            isFeatured: feature,
            image: image
        });
        res.status(200).json({
            message: "Event Added"
        });
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
var __webpack_exports__ = (__webpack_exec__(8096));
module.exports = __webpack_exports__;

})();