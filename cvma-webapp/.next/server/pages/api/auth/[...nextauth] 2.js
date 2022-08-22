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

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"s3Client\": () => (/* binding */ s3Client),\n/* harmony export */   \"hashPasswd\": () => (/* binding */ hashPasswd),\n/* harmony export */   \"verifyPasswd\": () => (/* binding */ verifyPasswd)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst REGION = \"us-east-1\";\nconst s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n    region: REGION\n});\n\nasync function hashPasswd(password) {\n    const hashedPasswd = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPasswd;\n}\nasync function verifyPasswd(passwd, hashedPasswd) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(passwd, hashedPasswd);\n    return isValid;\n} // pull data from data base to make a year array\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS11dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUU3QyxLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFXO0FBQzFCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0Ysd0RBQVEsQ0FBQyxDQUFDO0lBQUNHLE1BQU0sRUFBRUYsTUFBTTtBQUFDLENBQUM7QUFDakM7QUFFUixlQUFlRyxVQUFVLENBQUNDLFFBQVEsRUFBRSxDQUFDO0lBQzFDLEtBQUssQ0FBQ0MsWUFBWSxHQUFHLEtBQUssQ0FBQ1IsOENBQUksQ0FBQ08sUUFBUSxFQUFFLEVBQUU7SUFDNUMsTUFBTSxDQUFDQyxZQUFZO0FBQ3JCLENBQUM7QUFFTSxlQUFlQyxZQUFZLENBQUVDLE1BQU0sRUFBRUYsWUFBWSxFQUFFLENBQUM7SUFDekQsS0FBSyxDQUFDRyxPQUFPLEdBQUcsS0FBSyxDQUFDVixpREFBTyxDQUFDUyxNQUFNLEVBQUVGLFlBQVk7SUFDbEQsTUFBTSxDQUFDRyxPQUFPO0FBQ2hCLENBQUMsQ0FFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcm91dGluZy1jb3Vyc2UvLi9oZWxwZXJzL2FwaS11dGlsLmpzP2ExZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IFMzQ2xpZW50IH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJztcblxuY29uc3QgUkVHSU9OID0gXCJ1cy1lYXN0LTFcIjtcbmNvbnN0IHMzQ2xpZW50ID0gbmV3IFMzQ2xpZW50KHsgcmVnaW9uOiBSRUdJT04gfSk7XG5leHBvcnR7czNDbGllbnR9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IGhhc2hlZFBhc3N3ZCA9IGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKTtcbiAgcmV0dXJuIGhhc2hlZFBhc3N3ZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3ZCAocGFzc3dkLCBoYXNoZWRQYXNzd2QpIHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dkLCBoYXNoZWRQYXNzd2QpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cblxuLy8gcHVsbCBkYXRhIGZyb20gZGF0YSBiYXNlIHRvIG1ha2UgYSB5ZWFyIGFycmF5XG5cblxuXG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJTM0NsaWVudCIsIlJFR0lPTiIsInMzQ2xpZW50IiwicmVnaW9uIiwiaGFzaFBhc3N3ZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dkIiwidmVyaWZ5UGFzc3dkIiwicGFzc3dkIiwiaXNWYWxpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/api-util.js\n");

/***/ }),

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument),\n/* harmony export */   \"findComments\": () => (/* binding */ findComments)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst password = 'bunbuns2022';\nconst database = 'cvma';\nasync function connectDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test.3r6zb.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    client.close();\n    return result;\n}\nasync function findComments(client, collection, sort, filter) {\n    const db = client.db();\n    const document = await db.collection(collection).find(filter).sort(sort).toArray();\n    return document;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBYTtBQUM5QixLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFNO0FBRWhCLGVBQWVDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0osd0RBQW1CLEVBQ3JDLGNBQWMsRUFBRU0sT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDLEVBQUVGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxjQUFjLENBQUMsd0JBQXdCLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxjQUFjLENBQUMsNEJBQTRCO0lBRTdKLE1BQU0sQ0FBQ04sTUFBTTtBQUNmLENBQUM7QUFFTSxlQUFlTyxjQUFjLENBQUNQLE1BQU0sRUFBRVEsVUFBVSxFQUFFQyxRQUFRLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUNDLEVBQUUsR0FBR1YsTUFBTSxDQUFDVSxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsRUFBRUksU0FBUyxDQUFDSCxRQUFRO0lBQ2pFVCxNQUFNLENBQUNhLEtBQUs7SUFDWixNQUFNLENBQUNGLE1BQU07QUFDZixDQUFDO0FBRU0sZUFBZUcsWUFBWSxDQUFDZCxNQUFNLEVBQUVRLFVBQVUsRUFBRU8sSUFBSSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxLQUFLLENBQUNOLEVBQUUsR0FBR1YsTUFBTSxDQUFDVSxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0QsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsRUFBRSxDQUN0QkYsVUFBVSxDQUFDQSxVQUFVLEVBQ3JCUyxJQUFJLENBQUNELE1BQU0sRUFDWEQsSUFBSSxDQUFDQSxJQUFJLEVBQ1RHLE9BQU87SUFFVixNQUFNLENBQUNULFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yb3V0aW5nLWNvdXJzZS8uL2hlbHBlcnMvZGItdXRpbC5qcz9mNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgcGFzc3dvcmQgPSAnYnVuYnVuczIwMjInO1xuY29uc3QgZGF0YWJhc2UgPSAnY3ZtYSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lk1PTkdPX1VTRVJOQU1FfToke3Byb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JEfUB0ZXN0LjNyNnpiLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYuTU9OR09fREFUQUJBU0V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgKTtcbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydERvY3VtZW50KGNsaWVudCwgY29sbGVjdGlvbiwgZG9jdW1lbnQpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuICBjbGllbnQuY2xvc2UoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDb21tZW50cyhjbGllbnQsIGNvbGxlY3Rpb24sIHNvcnQsIGZpbHRlcikge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBkb2N1bWVudCA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAuZmluZChmaWx0ZXIpXG4gICAgLnNvcnQoc29ydClcbiAgICAudG9BcnJheSgpO1xuICBcbiAgcmV0dXJuIGRvY3VtZW50O1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsImNvbm5lY3REYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVNFUk5BTUUiLCJNT05HT19QQVNTV09SRCIsIk1PTkdPX0RBVEFCQVNFIiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwiZmluZENvbW1lbnRzIiwic29ydCIsImZpbHRlciIsImZpbmQiLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/api-util */ \"(api)/./helpers/api-util.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n            async authorize (credentials) {\n                const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__.connectDatabase)();\n                const usersCollection = client.db().collection(\"members\");\n                const user = await usersCollection.findOne({\n                    memberId: credentials.memberNumber\n                });\n                console.log(user);\n                if (!user) {\n                    client.close();\n                    throw new Error(\"No User Found\");\n                }\n                const isValid = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_3__.verifyPasswd)(credentials.password, user.password);\n                if (!isValid) {\n                    client.close();\n                    throw new Error(\"Invalid Password\");\n                }\n                client.close();\n                // =================================================================\n                // I might have to store the data for the token above the client.close() method\n                // if so will store an object.\n                //================================================================\n                return {\n                    name: user.memberId,\n                    email: user.email\n                };\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUNlO0FBQ0Y7QUFFeEQsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUN2QkksT0FBTyxFQUFFLENBQUM7UUFDUkMsR0FBRyxFQUFFLElBQUk7SUFDWCxDQUFDO0lBQ0RDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZMLHNFQUFxQixDQUFDLENBQUM7a0JBQ2ZPLFNBQVMsRUFBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBQzVCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1IsaUVBQWU7Z0JBRXBDLEtBQUssQ0FBQ1MsZUFBZSxHQUFHRCxNQUFNLENBQUNFLEVBQUUsR0FBR0MsVUFBVSxDQUFDLENBQVM7Z0JBR3hELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0gsZUFBZSxDQUFDSSxPQUFPLENBQUMsQ0FBQztvQkFDMUNDLFFBQVEsRUFBRVAsV0FBVyxDQUFDUSxZQUFZO2dCQUNwQyxDQUFDO2dCQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSTtnQkFDaEIsRUFBRSxHQUFHQSxJQUFJLEVBQUUsQ0FBQztvQkFDVkosTUFBTSxDQUFDVSxLQUFLO29CQUNaLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFlO2dCQUNqQyxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ25CLCtEQUFZLENBQUNNLFdBQVcsQ0FBQ2MsUUFBUSxFQUFFVCxJQUFJLENBQUNTLFFBQVE7Z0JBRXRFLEVBQUUsR0FBR0QsT0FBTyxFQUFFLENBQUM7b0JBQ2JaLE1BQU0sQ0FBQ1UsS0FBSztvQkFDWixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBa0I7Z0JBQ3BDLENBQUM7Z0JBQ0RYLE1BQU0sQ0FBQ1UsS0FBSztnQkFDWixFQUFvRTtnQkFDcEUsRUFBK0U7Z0JBQy9FLEVBQThCO2dCQUM5QixFQUFrRTtnQkFDbEUsTUFBTSxDQUFDLENBQUM7b0JBQ05JLElBQUksRUFBRVYsSUFBSSxDQUFDRSxRQUFRO29CQUNuQlMsS0FBSyxFQUFFWCxJQUFJLENBQUNXLEtBQUs7Z0JBRW5CLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yb3V0aW5nLWNvdXJzZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgY29ubmVjdERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xuaW1wb3J0IHsgdmVyaWZ5UGFzc3dkIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJtZW1iZXJzXCIpO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICAgICAgICBtZW1iZXJJZDogY3JlZGVudGlhbHMubWVtYmVyTnVtYmVyXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIEZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlQYXNzd2QoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUGFzc3dvcmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIEkgbWlnaHQgaGF2ZSB0byBzdG9yZSB0aGUgZGF0YSBmb3IgdGhlIHRva2VuIGFib3ZlIHRoZSBjbGllbnQuY2xvc2UoKSBtZXRob2RcbiAgICAgICAgLy8gaWYgc28gd2lsbCBzdG9yZSBhbiBvYmplY3QuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHVzZXIubWVtYmVySWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWxcbiAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImNvbm5lY3REYXRhYmFzZSIsInZlcmlmeVBhc3N3ZCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJDcmVkZW50aWFscyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY2xpZW50IiwidXNlcnNDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJtZW1iZXJJZCIsIm1lbWJlck51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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