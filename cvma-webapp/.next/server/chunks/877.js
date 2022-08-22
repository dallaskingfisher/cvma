"use strict";
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SE": () => (/* binding */ s3Client),
/* harmony export */   "Kk": () => (/* binding */ hashPasswd),
/* harmony export */   "pn": () => (/* binding */ verifyPasswd)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);


const REGION = "us-east-1";
const s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({
    region: REGION
});

async function hashPasswd(password) {
    const hashedPasswd = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);
    return hashedPasswd;
}
async function verifyPasswd(passwd, hashedPasswd) {
    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(passwd, hashedPasswd);
    return isValid;
} // pull data from data base to make a year array


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


/***/ })

};
;