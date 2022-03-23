import { hash, compare } from 'bcryptjs';

export async function hashPasswd(password) {
  const hashedPasswd = await hash(password, 12);
  return hashedPasswd;
}

export async function verifyPasswd (passwd, hashedPasswd) {
  const isValid = await compare(passwd, hashedPasswd);
  return isValid;
}



//----------------------------------------------------------------
// Update all function to use mongo cvma database once done with authentication.
export function extractData(filePath){
   const fileData = fs.readFileSync(filePath);
   const data = JSON.parse(fileData);
   return data;
}


export async function getAllEvents() {
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

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}