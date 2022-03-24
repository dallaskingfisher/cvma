import EventUpdate from '../components/events/update/event-update'
import {getAllEvents, getFeaturedEvents, getEventById} from '../helpers/api-util'
function testbuilder() {
    

    async function eventHandler(event){
        event.preventDefault();
        const events = await getAllEvents();
        console.log(events)
        // // console.log(events.data)
        // const feature = await getFeaturedEvents();
        // // console.log(feature)
        // const id = "623555823144ad58f56e819b"
        // const eventId = await getEventById(id)
        // console.log(eventId)
    }
    return (
        <div>
        
         <EventUpdate />
         <a onClick={eventHandler}>event</a>
        </div>
    )
}

export default testbuilder;