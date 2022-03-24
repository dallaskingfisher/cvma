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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPasswd\": () => (/* binding */ hashPasswd),\n/* harmony export */   \"verifyPasswd\": () => (/* binding */ verifyPasswd),\n/* harmony export */   \"getAllEvents\": () => (/* binding */ getAllEvents),\n/* harmony export */   \"getFeaturedEvents\": () => (/* binding */ getFeaturedEvents),\n/* harmony export */   \"getEventById\": () => (/* binding */ getEventById),\n/* harmony export */   \"getFilteredEvents\": () => (/* binding */ getFilteredEvents)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPasswd(password) {\n    const hashedPasswd = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPasswd;\n}\nasync function verifyPasswd(passwd, hashedPasswd) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(passwd, hashedPasswd);\n    return isValid;\n}\n//----------------------------------------------------------------\n// Update all function to use mongo cvma database once done with authentication.\n// export function extractData(filePath){\n//    const fileData = fs.readFileSync(filePath);\n//    const data = JSON.parse(fileData);\n//    return data;\n// }\nasync function getAllEvents() {\n    const response = await fetch('http://localhost:3000/api/events');\n    const events = await response.json();\n    // const events = [];\n    // for (const key in data) {\n    //   events.push({\n    //     id: key,\n    //     ...data[key]\n    //   });\n    //}\n    return events;\n}\nasync function getFeaturedEvents() {\n    const allEvents = await getAllEvents();\n    const event1 = allEvents.data.filter((event)=>event.id === event.id\n    );\n    return event1;\n}\nasync function getEventById(id) {\n    const eventId = id;\n    console.log(eventId);\n    const allEvents = await getAllEvents();\n    console.log(allEvents);\n    const result = allEvents.data.find((event)=>event.id === event.eventId\n    );\n    console.log(result);\n    return result;\n}\nasync function getFilteredEvents(dateFilter) {\n    const { year , month  } = dateFilter;\n    const allEvents = await getAllEvents();\n    let filteredEvents = allEvents.data.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n    });\n    return filteredEvents;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS11dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBRWpDLGVBQWVFLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDMUMsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSyxDQUFDSiw4Q0FBSSxDQUFDRyxRQUFRLEVBQUUsRUFBRTtJQUM1QyxNQUFNLENBQUNDLFlBQVk7QUFDckIsQ0FBQztBQUVNLGVBQWVDLFlBQVksQ0FBRUMsTUFBTSxFQUFFRixZQUFZLEVBQUUsQ0FBQztJQUN6RCxLQUFLLENBQUNHLE9BQU8sR0FBRyxLQUFLLENBQUNOLGlEQUFPLENBQUNLLE1BQU0sRUFBRUYsWUFBWTtJQUNsRCxNQUFNLENBQUNHLE9BQU87QUFDaEIsQ0FBQztBQUlELEVBQWtFO0FBQ2xFLEVBQWdGO0FBQ2hGLEVBQXlDO0FBQ3pDLEVBQWlEO0FBQ2pELEVBQXdDO0FBQ3hDLEVBQWtCO0FBQ2xCLEVBQUk7QUFHRyxlQUFlQyxZQUFZLEdBQUcsQ0FBQztJQUNwQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFrQztJQUMvRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUVsQyxFQUFxQjtJQUVyQixFQUE0QjtJQUM1QixFQUFrQjtJQUNsQixFQUFlO0lBQ2YsRUFBbUI7SUFDbkIsRUFBUTtJQUNSLEVBQUc7SUFFSCxNQUFNLENBQUNELE1BQU07QUFDZixDQUFDO0FBRU0sZUFBZUUsaUJBQWlCLEdBQUcsQ0FBQztJQUN6QyxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNOLFlBQVk7SUFDcEMsS0FBSyxDQUFDTyxNQUFLLEdBQUdELFNBQVMsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFNLEVBQUNGLEtBQUssR0FBSUEsS0FBSyxDQUFDRyxFQUFFLEtBQUtILEtBQUssQ0FBQ0csRUFBRTs7SUFFbEUsTUFBTSxDQUFDSCxNQUFLO0FBQ2QsQ0FBQztBQUVNLGVBQWVJLFlBQVksQ0FBQ0QsRUFBRSxFQUFFLENBQUM7SUFDdEMsS0FBSyxDQUFDRSxPQUFPLEdBQUdGLEVBQUU7SUFDbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBQ25CLEtBQUssQ0FBQ04sU0FBUyxHQUFHLEtBQUssQ0FBQ04sWUFBWTtJQUNwQ2EsT0FBTyxDQUFDQyxHQUFHLENBQUNSLFNBQVM7SUFDdEIsS0FBSyxDQUFDUyxNQUFNLEdBQUdULFNBQVMsQ0FBQ0UsSUFBSSxDQUFDUSxJQUFJLEVBQUNULEtBQUssR0FBSUEsS0FBSyxDQUFDRyxFQUFFLEtBQUtILEtBQUssQ0FBQ0ssT0FBTzs7SUFDdEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNO0lBQ2xCLE1BQU0sQ0FBQ0EsTUFBTTtBQUNkLENBQUM7QUFFTSxlQUFlRSxpQkFBaUIsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7SUFDbkQsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHRixVQUFVO0lBRWxDLEtBQUssQ0FBQ1osU0FBUyxHQUFHLEtBQUssQ0FBQ04sWUFBWTtJQUVwQyxHQUFHLENBQUNxQixjQUFjLEdBQUdmLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFNLEVBQUVGLEtBQUssR0FBSyxDQUFDO1FBQ3JELEtBQUssQ0FBQ2UsU0FBUyxHQUFHLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsSUFBSTtRQUNyQyxNQUFNLENBQUNGLFNBQVMsQ0FBQ0csV0FBVyxPQUFPTixJQUFJLElBQUlHLFNBQVMsQ0FBQ0ksUUFBUSxPQUFPTixLQUFLLEdBQUcsQ0FBQztJQUMvRSxDQUFDO0lBRUQsTUFBTSxDQUFDQyxjQUFjO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcm91dGluZy1jb3Vyc2UvLi9oZWxwZXJzL2FwaS11dGlsLmpzP2ExZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd2QocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xuICByZXR1cm4gaGFzaGVkUGFzc3dkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dkIChwYXNzd2QsIGhhc2hlZFBhc3N3ZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd2QsIGhhc2hlZFBhc3N3ZCk7XG4gIHJldHVybiBpc1ZhbGlkO1xufVxuXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVcGRhdGUgYWxsIGZ1bmN0aW9uIHRvIHVzZSBtb25nbyBjdm1hIGRhdGFiYXNlIG9uY2UgZG9uZSB3aXRoIGF1dGhlbnRpY2F0aW9uLlxuLy8gZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REYXRhKGZpbGVQYXRoKXtcbi8vICAgIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbi8vICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcbi8vICAgIHJldHVybiBkYXRhO1xuLy8gfVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxFdmVudHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZXZlbnRzJyk7XG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zdCBldmVudHMgPSBbXTtcblxuICAvLyBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gIC8vICAgZXZlbnRzLnB1c2goe1xuICAvLyAgICAgaWQ6IGtleSxcbiAgLy8gICAgIC4uLmRhdGFba2V5XVxuICAvLyAgIH0pO1xuICAvL31cblxuICByZXR1cm4gZXZlbnRzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVhdHVyZWRFdmVudHMoKSB7XG4gIGNvbnN0IGFsbEV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xuICBjb25zdCBldmVudCA9IGFsbEV2ZW50cy5kYXRhLmZpbHRlcihldmVudCA9PiBldmVudC5pZCA9PT0gZXZlbnQuaWQpXG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRCeUlkKGlkKSB7XG4gIGNvbnN0IGV2ZW50SWQgPSBpZDtcbiAgY29uc29sZS5sb2coZXZlbnRJZClcbiAgY29uc3QgYWxsRXZlbnRzID0gYXdhaXQgZ2V0QWxsRXZlbnRzKCk7XG4gIGNvbnNvbGUubG9nKGFsbEV2ZW50cylcbiBjb25zdCByZXN1bHQgPSBhbGxFdmVudHMuZGF0YS5maW5kKGV2ZW50ID0+IGV2ZW50LmlkID09PSBldmVudC5ldmVudElkKVxuIGNvbnNvbGUubG9nKHJlc3VsdClcbiByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcikge1xuICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBkYXRlRmlsdGVyO1xuXG4gIGNvbnN0IGFsbEV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xuXG4gIGxldCBmaWx0ZXJlZEV2ZW50cyA9IGFsbEV2ZW50cy5kYXRhLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5kYXRlKTtcbiAgICByZXR1cm4gZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xufVxuXG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJoYXNoUGFzc3dkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd2QiLCJ2ZXJpZnlQYXNzd2QiLCJwYXNzd2QiLCJpc1ZhbGlkIiwiZ2V0QWxsRXZlbnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImV2ZW50cyIsImpzb24iLCJnZXRGZWF0dXJlZEV2ZW50cyIsImFsbEV2ZW50cyIsImV2ZW50IiwiZGF0YSIsImZpbHRlciIsImlkIiwiZ2V0RXZlbnRCeUlkIiwiZXZlbnRJZCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJmaW5kIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJkYXRlRmlsdGVyIiwieWVhciIsIm1vbnRoIiwiZmlsdGVyZWRFdmVudHMiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/api-util.js\n");

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