import classes from "./eventpost.module.css";
import EventDetails from "./eventDetails";
import {useState, useEffect, useRef } from 'react';
function EventPost(props) {
  const [checked, setChecked] = useState(false);
  const [refresh, setRefresh] = useState([]);
  const [update ,setUpdate ] = useState(false);
  
 useEffect(() => {
   fetch('api/events/getEvents').then((res) => res.json()).then((data) => setRefresh(data.data))
 },[update])
 //const event1 = JSON.parse(props.events);
  let events
  if(checked){
   events = refresh.filter(event => event["checkedEvent"] === true);
   console.log(events)
  }
  else{
    events = refresh.filter(event => event["checkedEvent"] === false);
    console.log('event that need to be reviewed')
    console.log(events)

  }
  const idRef = useRef();
  const publicEventRef = useRef();
  const checkedEventRef = useRef();

  const updateHandler = async (e) => {
    e.preventDefault()
    const id = idRef.current.value;
    const publicEvent = publicEventRef.current.value;

    const changeView = async (id, publicEvent,checkedEvent) => {
      console.log(id);
      console.log(publicEvent)
      const response = await fetch('api/events/getEvents',{ 
        method: "PATCH",
        body: JSON.stringify({
           id,
          publicEvent,
          checkedEvent
        }),
        headers: { "Content-Type": "application/json" }
      })
      const message = await response.json()
      console.log(message)
      setUpdate(!update)
  }
    console.log("made Public")
    if(publicEvent === false){
      changeView(id, true, true);
      setUpdate(!update)
    } else {
      changeView(id, false , true)
      setUpdate(!update)
    }
  }
  const privateHandler = async (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const checkedEvent = checkedEventRef.current.value;
    const publicEvent = publicEventRef.current.value
    const checked = async (publicEvent,checkedEvent) =>{
      const response = await fetch('api/events/getEvents',{
        method: "PATCH",
        body: JSON.stringify({
          id,
          publicEvent: publicEvent,
          checkedEvent: checkedEvent
        }),
        headers: { "Content-Type": "application/json" }
      })
       const message = await response.json();
       console.log(message);
    }
    if(checkedEvent === true){
      checked(publicEvent, true)
      console.log("checked switched to true")
    } else {
      checked(publicEvent, false)
      console.log("checked switched to false")
    }

  }
  return (
    <section className={classes.background}>
      <h1>Event Management</h1>
      <br/>
      
      <button onClick={() => {setChecked(!checked); setUpdate(!update);}}>{checked ? "view":"viewed"}</button>
      { events.map((event) =>
         <div key={event["_id"]} >
          <input type="hidden" value={event["_id"]} ref={idRef} />
          {console.log(event["_id"])}
          <input type="hidden" value={event["publicEvent"]} ref={publicEventRef} />
          <input type="hidden" value={event["checkedEvent"]} ref={checkedEventRef} />
         <EventDetails title={event["title"]} date={event["date"]} streetNumber={event["streetNumber"]}
         street={event["street"]} city={event["city"]} state={event["state"]} eventdes={event["eventdes"]}/>
           <button onDoubleClick={updateHandler}>Double Click to make Public</button>
           <button onClick={privateHandler}>Checked</button>
         </div> 
       )
         }
      
    </section>
  );
}
export default EventPost;
