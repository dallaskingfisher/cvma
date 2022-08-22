"use strict";
(() => {
var exports = {};
exports.id = 18;
exports.ids = [18];
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

/***/ 1542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);


async function handler(req, res) {
    if (req.method === "POST") {
        const memNumber = req.body.memNumber;
        const email = req.body.email;
        const passwd = req.body.passwd;
        const passwdVerify = req.body.passwdVerify;
        if (memNumber.includes("FM") || memNumber.includes("AUX") || memNumber.includes("S") || memNumber.includes("SAUX")) {} else {
            res.status(422).json({
                message: "Member number must include FM, AUX, S, SAUX"
            });
            return;
        }
        if (!email.includes("@")) {
            res.status(422).json({
                message: "Not a valid Email"
            });
            return;
        }
        if (passwd !== passwdVerify) {
            res.status(422).json({
                message: "Passwords do not match"
            });
            return;
        }
        if (!passwd.length >= 8) {
            res.status(422).json({
                message: "Password Must be at least 8 characters long"
            });
            return;
        }
        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        const database = client.db().collection("members");
        const user = await database.findOne({
            memberId: memNumber
        });
        if (user === null) {
            client.close();
            res.status(422).json({
                message: "Member does not Exist"
            });
        }
        if (email.toLowerCase() !== user.email.toLowerCase()) {
            client.close();
            res.status(422).json({
                message: "Email Dose Not Match"
            });
        }
        console.log(user.password);
        if (user.password === "") {
            try {
                const hashedPassword = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_1__/* .hashPasswd */ .Kk)(passwd);
                const message = await database.updateOne({
                    memberId: memNumber
                }, {
                    $set: {
                        password: hashedPassword
                    }
                });
                res.status(200).json({
                    message: message
                });
            } catch (err) {
                console.log("Error", err);
            }
        }
    } else {
        client.close();
        res.status(422).json({
            message: "User already Registered Please login with current password"
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
var __webpack_exports__ = __webpack_require__.X(0, [877], () => (__webpack_exec__(1542)));
module.exports = __webpack_exports__;

})();