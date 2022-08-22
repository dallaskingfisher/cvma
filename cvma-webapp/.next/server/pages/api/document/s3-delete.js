"use strict";
(() => {
var exports = {};
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 8994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1993);



//https://combatveteransmotorcycleassocaition.s3.amazonaws.com/next-s3-uploads/284bbc12-94f1-44f7-b704-0e3eb941d6dc/years.js
async function handler(req, res) {
    if (req.method == "DELETE") {
        const location = req.body.location;
        const bucket = "combatveteransmotorcycleassocaition";
        const key = location.slice(71);
        const bucketParams = {
            Bucket: bucket,
            Key: key
        };
        await _helpers_api_util__WEBPACK_IMPORTED_MODULE_1__/* .s3Client.send */ .SE.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectCommand(bucketParams));
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__/* .connectDatabase */ .TR)();
        const collection = client.db().collection("documents");
        await collection.deleteOne({
            location: location
        });
        res.status(200).json({
            message: "DELETED, Please Refresh"
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
var __webpack_exports__ = __webpack_require__.X(0, [877], () => (__webpack_exec__(8994)));
module.exports = __webpack_exports__;

})();