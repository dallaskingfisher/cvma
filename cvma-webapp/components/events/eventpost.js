import classes from "./eventpost.module.css";
import EventDetails from "./eventDetails";
function EventPost(props) {
  const event1 = JSON.parse(props.events);
  console.log(event1);
  console.log(event1[0].title);
  return (
    <section className={classes.background}>
      <h1>Event Management</h1>
      {
        event1.map((event) => 
        <div key={event["_id"]}>
        
            <EventDetails title={event["title"]} date={event["date"]} streetNumber={event["streetNumber"]}
        street={event["street"]} city={event["city"]} state={event["state"]} eventdes={event["eventdes"]}/>
        </div>)
      }
    </section>
  );
}
export default EventPost;
