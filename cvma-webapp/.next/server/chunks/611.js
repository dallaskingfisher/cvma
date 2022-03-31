"use strict";
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 8611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ getAllEvents),
/* harmony export */   "N6": () => (/* binding */ getFeaturedEvents),
/* harmony export */   "Y": () => (/* binding */ getEventById),
/* harmony export */   "nk": () => (/* binding */ getFilteredEvents)
/* harmony export */ });
/* unused harmony exports hashPasswd, verifyPasswd */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

async function hashPasswd(password) {
    const hashedPasswd = await hash(password, 12);
    return hashedPasswd;
}
async function verifyPasswd(passwd, hashedPasswd) {
    const isValid = await compare(passwd, hashedPasswd);
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


/***/ })

};
;