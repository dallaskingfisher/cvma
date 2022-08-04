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
exports.id = "pages/api/document/years";
exports.ids = ["pages/api/document/years"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument),\n/* harmony export */   \"findComments\": () => (/* binding */ findComments)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst password = 'bunbuns2022';\nconst database = 'cvma';\nasync function connectDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://dallasking:bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority');\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    client.close();\n    return result;\n}\nasync function findComments(client, collection, sort, filter) {\n    const db = client.db();\n    const document = await db.collection(collection).find(filter).sort(sort).toArray();\n    return document;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBYTtBQUM5QixLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFNO0FBRWhCLGVBQWVDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0osd0RBQW1CLENBQ3RDLENBQThGO0lBRWhHLE1BQU0sQ0FBQ0ksTUFBTTtBQUNmLENBQUM7QUFFTSxlQUFlRSxjQUFjLENBQUNGLE1BQU0sRUFBRUcsVUFBVSxFQUFFQyxRQUFRLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUNDLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsRUFBRUksU0FBUyxDQUFDSCxRQUFRO0lBQ2pFSixNQUFNLENBQUNRLEtBQUs7SUFDWixNQUFNLENBQUNGLE1BQU07QUFDZixDQUFDO0FBRU0sZUFBZUcsWUFBWSxDQUFDVCxNQUFNLEVBQUVHLFVBQVUsRUFBRU8sSUFBSSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxLQUFLLENBQUNOLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0QsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsRUFBRSxDQUN0QkYsVUFBVSxDQUFDQSxVQUFVLEVBQ3JCUyxJQUFJLENBQUNELE1BQU0sRUFDWEQsSUFBSSxDQUFDQSxJQUFJLEVBQ1RHLE9BQU87SUFFVixNQUFNLENBQUNULFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yb3V0aW5nLWNvdXJzZS8uL2hlbHBlcnMvZGItdXRpbC5qcz9mNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgcGFzc3dvcmQgPSAnYnVuYnVuczIwMjInO1xuY29uc3QgZGF0YWJhc2UgPSAnY3ZtYSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly9kYWxsYXNraW5nOmJ1bmJ1bnMyMDIyQHRlc3QuM3I2emIubW9uZ29kYi5uZXQvY3ZtYT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sIGRvY3VtZW50KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuaW5zZXJ0T25lKGRvY3VtZW50KTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kQ29tbWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0LCBmaWx0ZXIpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXG4gICAgLmZpbmQoZmlsdGVyKVxuICAgIC5zb3J0KHNvcnQpXG4gICAgLnRvQXJyYXkoKTtcbiAgXG4gIHJldHVybiBkb2N1bWVudDtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0IiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwiZmluZENvbW1lbnRzIiwic29ydCIsImZpbHRlciIsImZpbmQiLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/document/years.js":
/*!*************************************!*\
  !*** ./pages/api/document/years.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n\nasync function handler(req, res) {\n    try {\n        const client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.connectDatabase)();\n        const collection = client.db().collection('years');\n        const data = await collection.find({}).toArray();\n        const yearsArray = [];\n        Object.entries(data).forEach(([_, value])=>yearsArray.push(value.year)\n        );\n        res.status(200).json({\n            yearsArray\n        });\n    } catch (err) {\n        console.log(err);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9jdW1lbnQveWVhcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUQ7ZUFFMUNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUUxQixHQUFHLEVBQUM7UUFDSixLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNKLGlFQUFlO1FBQ3BDLEtBQUssQ0FBQ0ssVUFBVSxHQUFHRCxNQUFNLENBQUNFLEVBQUUsR0FBR0QsVUFBVSxDQUFDLENBQU87UUFDakQsS0FBSyxDQUFDRSxJQUFJLEdBQUcsS0FBSyxDQUFDRixVQUFVLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUMsT0FBTztRQUU5QyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDckJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTCxJQUFJLEVBQUVNLE9BQU8sR0FBR0MsQ0FBQyxFQUFDQyxLQUFLLElBQU1MLFVBQVUsQ0FBQ00sSUFBSSxDQUFDRCxLQUFLLENBQUNFLElBQUk7O1FBQ3RFZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDVDtZQUFBQSxVQUFVO1FBQUEsQ0FBQztJQUNqQyxDQUFDLENBQUMsS0FBSyxFQUFFVSxHQUFHLEVBQUUsQ0FBQ0M7UUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7SUFBQyxDQUFDO0FBRXhDLENBQUM7QUFDRCxpRUFBZW5CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yb3V0aW5nLWNvdXJzZS8uL3BhZ2VzL2FwaS9kb2N1bWVudC95ZWFycy5qcz9jY2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdERhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9kYi11dGlsJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIFxuICAgICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbigneWVhcnMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkudG9BcnJheSgpO1xuICAgICAgIFxuICAgICAgICBjb25zdCB5ZWFyc0FycmF5ID0gW11cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW18sdmFsdWVdKSA9PiB5ZWFyc0FycmF5LnB1c2godmFsdWUueWVhcikpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt5ZWFyc0FycmF5fSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7Y29uc29sZS5sb2coZXJyKX1cbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImNvbm5lY3REYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb2xsZWN0aW9uIiwiZGIiLCJkYXRhIiwiZmluZCIsInRvQXJyYXkiLCJ5ZWFyc0FycmF5IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfIiwidmFsdWUiLCJwdXNoIiwieWVhciIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/document/years.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/document/years.js"));
module.exports = __webpack_exports__;

})();