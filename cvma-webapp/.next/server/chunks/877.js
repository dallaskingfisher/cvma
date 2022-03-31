"use strict";
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kk": () => (/* binding */ hashPasswd),
/* harmony export */   "pn": () => (/* binding */ verifyPasswd)
/* harmony export */ });
/* unused harmony exports getAllEvents, getFeaturedEvents, getEventById, getFilteredEvents */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

async function hashPasswd(password) {
    const hashedPasswd = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);
    return hashedPasswd;
}
async function verifyPasswd(passwd, hashedPasswd) {
    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(passwd, hashedPasswd);
    return isValid;
}
//----------------------------------------------------------------
// Update all function to use mongo cvma database once done with authentication.
// export function extractData(filePath){
//    const fileData = fs.readFileSync(filePath);
//    const data = JSON.parse(fileData);
//    return data;
// }
async function getAllEvents() {
    const response = await fetch('http://localhost:3000/api/events');
    const events = await response.json();
    // const events = [];
    // for (const key in data) {
    //   events.push({
    //     id: key,
    //     ...data[key]
    //   });
    //}
    return events;
}
async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    const event1 = allEvents.data.filter((event)=>event.id === event.id
    );
    return event1;
}
async function getEventById(id) {
    const eventId = id;
    const allEvents = await getAllEvents();
    const result = allEvents.data.find((event)=>event.id === event.eventId
    );
    return result;
}
async function getFilteredEvents(dateFilter) {
    const { year , month  } = dateFilter;
    const allEvents = await getAllEvents();
    let filteredEvents = allEvents.data.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}


/***/ }),

/***/ 1993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TR": () => (/* binding */ connectDatabase),
/* harmony export */   "qi": () => (/* binding */ insertDocument),
/* harmony export */   "i4": () => (/* binding */ findComments)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const password = 'bunbuns2022';
const database = 'cvma';
async function connectDatabase() {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://dallasking:bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority');
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


/***/ })

};
;