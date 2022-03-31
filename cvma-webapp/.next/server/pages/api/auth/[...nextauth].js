"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
// EXTERNAL MODULE: ./helpers/db-util.js
var db_util = __webpack_require__(1993);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(492);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        jwt: true
    },
    providers: [
        providers_default().Credentials({
            async authorize (credentials) {
                const client = await (0,db_util/* connectDatabase */.TR)();
                const usersCollection = client.db().collection("members");
                const user = await usersCollection.findOne({
                    memberId: credentials.memberNumber
                });
                if (!user) {
                    client.close();
                    throw new Error("No User Found");
                }
                const isValid = await (0,api_util/* verifyPasswd */.pn)(credentials.password, user.password);
                if (!isValid) {
                    client.close();
                    throw new Error("Invalid Password");
                }
                client.close();
                // =================================================================
                // I might have to store the data for the token above the client.close() method
                // if so will store an object.
                //================================================================
                return {
                    name: user.memberId,
                    email: user.email
                };
            }
        }), 
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [877], () => (__webpack_exec__(3355)));
module.exports = __webpack_exports__;

})();