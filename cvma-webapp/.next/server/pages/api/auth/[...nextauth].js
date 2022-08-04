"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "(api)/./helpers/api-util.js":
/*!*****************************!*\
  !*** ./helpers/api-util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPasswd\": () => (/* binding */ hashPasswd),\n/* harmony export */   \"verifyPasswd\": () => (/* binding */ verifyPasswd)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPasswd(password) {\n    const hashedPasswd = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPasswd;\n}\nasync function verifyPasswd(passwd, hashedPasswd) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(passwd, hashedPasswd);\n    return isValid;\n} // pull data from data base to make a year array\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS11dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFHakMsZUFBZUUsVUFBVSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxLQUFLLENBQUNDLFlBQVksR0FBRyxLQUFLLENBQUNKLDhDQUFJLENBQUNHLFFBQVEsRUFBRSxFQUFFO0lBQzVDLE1BQU0sQ0FBQ0MsWUFBWTtBQUNyQixDQUFDO0FBRU0sZUFBZUMsWUFBWSxDQUFFQyxNQUFNLEVBQUVGLFlBQVksRUFBRSxDQUFDO0lBQ3pELEtBQUssQ0FBQ0csT0FBTyxHQUFHLEtBQUssQ0FBQ04saURBQU8sQ0FBQ0ssTUFBTSxFQUFFRixZQUFZO0lBQ2xELE1BQU0sQ0FBQ0csT0FBTztBQUNoQixDQUFDLENBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXJvdXRpbmctY291cnNlLy4vaGVscGVycy9hcGktdXRpbC5qcz9hMWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd2QocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xuICByZXR1cm4gaGFzaGVkUGFzc3dkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dkIChwYXNzd2QsIGhhc2hlZFBhc3N3ZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd2QsIGhhc2hlZFBhc3N3ZCk7XG4gIHJldHVybiBpc1ZhbGlkO1xufVxuXG4vLyBwdWxsIGRhdGEgZnJvbSBkYXRhIGJhc2UgdG8gbWFrZSBhIHllYXIgYXJyYXlcblxuXG5cbiJdLCJuYW1lcyI6WyJoYXNoIiwiY29tcGFyZSIsImhhc2hQYXNzd2QiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3ZCIsInZlcmlmeVBhc3N3ZCIsInBhc3N3ZCIsImlzVmFsaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/api-util.js\n");

/***/ }),

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument),\n/* harmony export */   \"findComments\": () => (/* binding */ findComments)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst password = 'bunbuns2022';\nconst database = 'cvma';\nasync function connectDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://dallasking:bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority');\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    client.close();\n    return result;\n}\nasync function findComments(client, collection, sort, filter) {\n    const db = client.db();\n    const document = await db.collection(collection).find(filter).sort(sort).toArray();\n    return document;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBYTtBQUM5QixLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFNO0FBRWhCLGVBQWVDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0osd0RBQW1CLENBQ3RDLENBQThGO0lBRWhHLE1BQU0sQ0FBQ0ksTUFBTTtBQUNmLENBQUM7QUFFTSxlQUFlRSxjQUFjLENBQUNGLE1BQU0sRUFBRUcsVUFBVSxFQUFFQyxRQUFRLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUNDLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsRUFBRUksU0FBUyxDQUFDSCxRQUFRO0lBQ2pFSixNQUFNLENBQUNRLEtBQUs7SUFDWixNQUFNLENBQUNGLE1BQU07QUFDZixDQUFDO0FBRU0sZUFBZUcsWUFBWSxDQUFDVCxNQUFNLEVBQUVHLFVBQVUsRUFBRU8sSUFBSSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxLQUFLLENBQUNOLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0QsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsRUFBRSxDQUN0QkYsVUFBVSxDQUFDQSxVQUFVLEVBQ3JCUyxJQUFJLENBQUNELE1BQU0sRUFDWEQsSUFBSSxDQUFDQSxJQUFJLEVBQ1RHLE9BQU87SUFFVixNQUFNLENBQUNULFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yb3V0aW5nLWNvdXJzZS8uL2hlbHBlcnMvZGItdXRpbC5qcz9mNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgcGFzc3dvcmQgPSAnYnVuYnVuczIwMjInO1xuY29uc3QgZGF0YWJhc2UgPSAnY3ZtYSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly9kYWxsYXNraW5nOmJ1bmJ1bnMyMDIyQHRlc3QuM3I2emIubW9uZ29kYi5uZXQvY3ZtYT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sIGRvY3VtZW50KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuaW5zZXJ0T25lKGRvY3VtZW50KTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kQ29tbWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0LCBmaWx0ZXIpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXG4gICAgLmZpbmQoZmlsdGVyKVxuICAgIC5zb3J0KHNvcnQpXG4gICAgLnRvQXJyYXkoKTtcbiAgXG4gIHJldHVybiBkb2N1bWVudDtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0IiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwiZmluZENvbW1lbnRzIiwic29ydCIsImZpbHRlciIsImZpbmQiLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/api-util */ \"(api)/./helpers/api-util.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n            async authorize (credentials) {\n                const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__.connectDatabase)();\n                const usersCollection = client.db().collection(\"members\");\n                const user = await usersCollection.findOne({\n                    memberId: credentials.memberNumber\n                });\n                if (!user) {\n                    client.close();\n                    throw new Error(\"No User Found\");\n                }\n                const isValid = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_3__.verifyPasswd)(credentials.password, user.password);\n                if (!isValid) {\n                    client.close();\n                    throw new Error(\"Invalid Password\");\n                }\n                client.close();\n                // =================================================================\n                // I might have to store the data for the token above the client.close() method\n                // if so will store an object.\n                //================================================================\n                return {\n                    name: user.memberId,\n                    email: user.email\n                };\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUNlO0FBQ0Y7QUFFeEQsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUN2QkksT0FBTyxFQUFFLENBQUM7UUFDUkMsR0FBRyxFQUFFLElBQUk7SUFDWCxDQUFDO0lBQ0RDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZMLHNFQUFxQixDQUFDLENBQUM7a0JBQ2ZPLFNBQVMsRUFBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBQzVCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1IsaUVBQWU7Z0JBRXBDLEtBQUssQ0FBQ1MsZUFBZSxHQUFHRCxNQUFNLENBQUNFLEVBQUUsR0FBR0MsVUFBVSxDQUFDLENBQVM7Z0JBR3hELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0gsZUFBZSxDQUFDSSxPQUFPLENBQUMsQ0FBQztvQkFDMUNDLFFBQVEsRUFBRVAsV0FBVyxDQUFDUSxZQUFZO2dCQUNwQyxDQUFDO2dCQUVELEVBQUUsR0FBR0gsSUFBSSxFQUFFLENBQUM7b0JBQ1ZKLE1BQU0sQ0FBQ1EsS0FBSztvQkFDWixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBZTtnQkFDakMsQ0FBQztnQkFDRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNqQiwrREFBWSxDQUFDTSxXQUFXLENBQUNZLFFBQVEsRUFBRVAsSUFBSSxDQUFDTyxRQUFRO2dCQUV0RSxFQUFFLEdBQUdELE9BQU8sRUFBRSxDQUFDO29CQUNiVixNQUFNLENBQUNRLEtBQUs7b0JBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQWtCO2dCQUNwQyxDQUFDO2dCQUNEVCxNQUFNLENBQUNRLEtBQUs7Z0JBQ1osRUFBb0U7Z0JBQ3BFLEVBQStFO2dCQUMvRSxFQUE4QjtnQkFDOUIsRUFBa0U7Z0JBQ2xFLE1BQU0sQ0FBQyxDQUFDO29CQUNOSSxJQUFJLEVBQUVSLElBQUksQ0FBQ0UsUUFBUTtvQkFDbkJPLEtBQUssRUFBRVQsSUFBSSxDQUFDUyxLQUFLO2dCQUVuQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcm91dGluZy1jb3Vyc2UvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcbmltcG9ydCB7IGNvbm5lY3REYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWxcIjtcbmltcG9ydCB7IHZlcmlmeVBhc3N3ZCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2FwaS11dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0RGF0YWJhc2UoKTtcblxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwibWVtYmVyc1wiKTtcblxuICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgICAgIG1lbWJlcklkOiBjcmVkZW50aWFscy5tZW1iZXJOdW1iZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBGb3VuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dkKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFBhc3N3b3JkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBJIG1pZ2h0IGhhdmUgdG8gc3RvcmUgdGhlIGRhdGEgZm9yIHRoZSB0b2tlbiBhYm92ZSB0aGUgY2xpZW50LmNsb3NlKCkgbWV0aG9kXG4gICAgICAgIC8vIGlmIHNvIHdpbGwgc3RvcmUgYW4gb2JqZWN0LlxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB1c2VyLm1lbWJlcklkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXG4gICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJjb25uZWN0RGF0YWJhc2UiLCJ2ZXJpZnlQYXNzd2QiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsInVzZXJzQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInVzZXIiLCJmaW5kT25lIiwibWVtYmVySWQiLCJtZW1iZXJOdW1iZXIiLCJjbG9zZSIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();