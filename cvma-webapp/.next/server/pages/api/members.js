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
exports.id = "pages/api/members";
exports.ids = ["pages/api/members"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument),\n/* harmony export */   \"findComments\": () => (/* binding */ findComments)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://dallasking:Bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority\");\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    client.close();\n    return result;\n}\nasync function findComments(client, collection, sort, filter) {\n    const db = client.db();\n    const document = await db.collection(collection).find(filter).sort(sort).toArray();\n    return document;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsZUFBZUMsZUFBZSxHQUFHLENBQUM7SUFDdkMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRix3REFBbUIsQ0FDdEMsQ0FBOEY7SUFFaEcsTUFBTSxDQUFDRSxNQUFNO0FBQ2YsQ0FBQztBQUVNLGVBQWVFLGNBQWMsQ0FBQ0YsTUFBTSxFQUFFRyxVQUFVLEVBQUVDLFFBQVEsRUFBRSxDQUFDO0lBQ2xFLEtBQUssQ0FBQ0MsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQUU7SUFDcEIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxFQUFFSSxTQUFTLENBQUNILFFBQVE7SUFDakVKLE1BQU0sQ0FBQ1EsS0FBSztJQUNaLE1BQU0sQ0FBQ0YsTUFBTTtBQUNmLENBQUM7QUFFTSxlQUFlRyxZQUFZLENBQUNULE1BQU0sRUFBRUcsVUFBVSxFQUFFTyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQ3BFLEtBQUssQ0FBQ04sRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQUU7SUFDcEIsS0FBSyxDQUFDRCxRQUFRLEdBQUcsS0FBSyxDQUFDQyxFQUFFLENBQ3RCRixVQUFVLENBQUNBLFVBQVUsRUFDckJTLElBQUksQ0FBQ0QsTUFBTSxFQUNYRCxJQUFJLENBQUNBLElBQUksRUFDVEcsT0FBTztJQUVWLE1BQU0sQ0FBQ1QsUUFBUTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXJvdXRpbmctY291cnNlLy4vaGVscGVycy9kYi11dGlsLmpzP2Y1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9kYWxsYXNraW5nOkJ1bmJ1bnMyMDIyQHRlc3QuM3I2emIubW9uZ29kYi5uZXQvY3ZtYT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCBjb2xsZWN0aW9uLCBkb2N1bWVudCkge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkb2N1bWVudCk7XG4gIGNsaWVudC5jbG9zZSgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZENvbW1lbnRzKGNsaWVudCwgY29sbGVjdGlvbiwgc29ydCwgZmlsdGVyKSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxuICAgIC5maW5kKGZpbHRlcilcbiAgICAuc29ydChzb3J0KVxuICAgIC50b0FycmF5KCk7XG4gIFxuICByZXR1cm4gZG9jdW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0IiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwiZmluZENvbW1lbnRzIiwic29ydCIsImZpbHRlciIsImZpbmQiLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/members/index.js":
/*!************************************!*\
  !*** ./pages/api/members/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const memberId = req.body.memberId;\n        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.connectDatabase)();\n        const collection = client.db().collection('members');\n        const member = await collection.findOne({\n            memberId: memberId\n        });\n        res.status(200).json({\n            member\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtlQUUzQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQyxDQUFDO0lBSWhDLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFJLENBQUM7UUFDN0IsS0FBSyxDQUFDQyxRQUFRLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRCxRQUFRO1FBQ2xDLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEtBQUssQ0FBQ1AsaUVBQWU7UUFDcEMsS0FBSyxDQUFDUSxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsRUFBRSxHQUFHRCxVQUFVLENBQUMsQ0FBUztRQUNuRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLLENBQUNGLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFBQ04sUUFBUSxFQUFFQSxRQUFRO1FBQUEsQ0FBQztRQUU3REYsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0g7WUFBQUEsTUFBTTtRQUFBLENBQUM7SUFDN0IsQ0FBQztBQUVGLENBQUM7QUFFRCxpRUFBZVQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXJvdXRpbmctY291cnNlLy4vcGFnZXMvYXBpL21lbWJlcnMvaW5kZXguanM/YjA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0RGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWwnXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuXG5cblxuIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykgICB7XG4gY29uc3QgbWVtYmVySWQgPSByZXEuYm9keS5tZW1iZXJJZDtcbiBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0RGF0YWJhc2UoKTtcbiBjb25zdCBjb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbignbWVtYmVycycpO1xuIGNvbnN0IG1lbWJlciA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7IG1lbWJlcklkOiBtZW1iZXJJZH0pXG5cbiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVtYmVyfSlcbiB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiY29ubmVjdERhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm1lbWJlcklkIiwiYm9keSIsImNsaWVudCIsImNvbGxlY3Rpb24iLCJkYiIsIm1lbWJlciIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/members/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/members/index.js"));
module.exports = __webpack_exports__;

})();