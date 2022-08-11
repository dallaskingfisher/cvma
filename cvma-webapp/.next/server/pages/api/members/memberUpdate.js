"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
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

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);

async function handler(req, res) {
    if (req.method === "POST") {
        const memberId = req.body.memberId;
        const roadName = req.body.roadNameUpdate;
        const cellPhone = req.body.cellPhoneUpdate;
        const homePhone = req.body.homePhoneUpdate;
        const address = req.body.addressUpdate;
        const city = req.body.cityUpdate;
        const state = req.body.stateUpdate;
        const zip = req.body.zipUpdate;
        const iceName = req.body.iceNameUpdate;
        const iceNumber = req.body.iceNumberUpdate;
        const email = req.body.emailUpdate;
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        const collection = client.db().collection("members");
        await collection.updateOne({
            memberId: memberId
        }, {
            $set: {
                roadName: roadName,
                address: address,
                city: city,
                state: state,
                zip: zip,
                iceName: iceName,
                iceNumber: iceNumber,
                cellPhone: cellPhone,
                homePhone: homePhone,
                email: email
            }
        });
        res.status(200).json({
            message: "Info Updated"
        });
    }
    if (req.method === "GET") {
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        const collection = client.db().collection('members');
        const data = await collection.find({}).toArray();
        res.status(200).json({
            data
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
var __webpack_exports__ = (__webpack_exec__(1543));
module.exports = __webpack_exports__;

})();