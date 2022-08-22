"use strict";
(() => {
var exports = {};
exports.id = 248;
exports.ids = [248];
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

/***/ 4225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);


async function handler(req, res) {
    if (req.method === "POST") {
        const memberNumber = req.body.memberNumber;
        const email = req.body.email;
        const passwd = req.body.passwd;
        const passwdVerify = req.body.passwdVerify;
        const address = req.body.address;
        if (memberNumber.includes("FM") || memberNumber.includes("AUX") || memberNumber.includes("S") || memberNumber.includes("SAUX")) {} else {
            res.status(422).json({
                message: "Please use the member number prefix FM, AUX, S, SAUX"
            });
        }
        if (!email.includes("@")) {
            res.status(422).json({
                message: 'Must be a valid email'
            });
        }
        if (address.trim() === 0) {
            res.status(422).json({
                message: "Please enter a valid address"
            });
        }
        if (passwd !== passwdVerify) {
            res.status(422).json({
                message: 'Passsword do not Match'
            });
        }
        if (!passwd.length >= 8) {
            res.status(422).json({
                message: 'Password Must be at least 8 Charterters long'
            });
        }
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        const database = client.db().collection('members');
        const user = await database.findOne({
            memberId: memberNumber
        });
        //do member validation on the email and the address 
        // to verify that they are users.
        if (user === null) {
            res.status(404).json({
                message: 'Member does not exist'
            });
        }
        if (user.password === null) {
            res.status(422).json({
                message: 'Password not set. Please register'
            });
        }
        if (email.toLowerCase() !== user.email.toLowerCase()) {
            res.status(422).json({
                message: 'Email must match Account'
            });
        }
        if (address.trim().toLowerCase() !== user.address.trim().toLowerCase()) {
            res.status(422).json({
                message: 'Address does not match Account'
            });
        }
        const hashedPassword = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_1__/* .hashPasswd */ .Kk)(passwd);
        await database.updateOne({
            memberId: memberNumber
        }, {
            $set: {
                password: hashedPassword
            }
        });
        res.status(201).json({
            message: 'Password updated'
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
var __webpack_exports__ = __webpack_require__.X(0, [877], () => (__webpack_exec__(4225)));
module.exports = __webpack_exports__;

})();