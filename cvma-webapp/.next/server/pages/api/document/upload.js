"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TR": () => (/* binding */ connectDatabase)
/* harmony export */ });
/* unused harmony exports insertDocument, findComments */
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const password = 'bunbuns2022';
const database = 'cvma';
async function connectDatabase() {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test.3r6zb.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`);
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

/***/ 1703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);

async function handler(req, res) {
    if (req.method === 'POST') {
        const category = req.body.category;
        const month = req.body.month;
        const year = req.body.year;
        const title = req.body.title;
        const location = req.body.location;
        if (year === '') {
            res.status(406).json({
                message: "Year Required"
            });
        } else if (title === '') {
            res.status(406).json({
                message: "Title Required"
            });
        } else if (location === null || location === undefined) {
            res.status(406).json({
                message: "File Required"
            });
        } else {
            const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
            const yearCollection = client.db().collection('years');
            const dataYear = await yearCollection.findOne({
                year: year
            });
            if (dataYear === null) {
                await yearCollection.insertOne({
                    year: year
                });
            }
            const collection = client.db().collection('documents');
            await collection.insertOne({
                category: category,
                month: month,
                year: year,
                title: title,
                location: location
            });
            res.status(200).json({
                message: 'File Uploaded'
            });
            client.close();
            client.close();
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
var __webpack_exports__ = (__webpack_exec__(1703));
module.exports = __webpack_exports__;

})();