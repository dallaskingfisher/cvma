import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
 // const { items } = props;
  
   const items = props.items
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event._id}
          title={event.title}
          address={event.address}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
