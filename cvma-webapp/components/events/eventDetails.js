import classes from './eventDetails.module.css';

function EventDetials (props) {

    

    return(
        <div className={classes.background} style={{border: "2px solid black",display:"flex"}}>
            <div className={classes.control}>
            <h3>{props.title}</h3>
            <br/>
                 Date: {props.date}
                <address>
                    {`${props.streetNumber} ${props.street}, ${props.city} ${props.state}`}
                </address>
                <p>{props.eventdes}</p>
            </div>
            <div className={classes.mapControl}>
            {/* <iframe
  width="400"
  height="250"
  frameborder="0" style={{boarder:"1"}}
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_KEY}&q=${props.streetNumber}+${props.street},${props.city}+${props.state}`}
  allowfullscreen>
</iframe> */}
            </div>
        </div>    
    )
}
export default EventDetials;