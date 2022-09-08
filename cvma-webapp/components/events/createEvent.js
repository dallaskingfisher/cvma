import classes from './createEvent.module.css';
import {useRef, useState, useEffect} from 'react';


function CreateEvent () {
  const [message, setMessage] = useState();
  const [ on , setOn] = useState(false);
useEffect(() => { 
   const timer = setTimeout(() => setMessage(null),7000);
   return () => clearTimeout(timer);
},[on])

   
    const  titleRef = useRef();
    const  addressRef = useRef();
    const  cityRef = useRef();
    const stateRef = useRef();
    const dateRef = useRef();
    const eventDesRef = useRef()
 

    const submitHandler = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const date = dateRef.current.value;
        const eventdes = eventDesRef.current.value;
        const publicEvent = false;
        const checkedEvent = false;
        e.target.reset()
     const response = await fetch('api/events/',{
        method: 'POST',
        body: JSON.stringify({
            title,
            address,
            city,
            state,
            date,
            eventdes,
            publicEvent,
            checkedEvent
        }),
        headers: {'Content-Type': 'application/json'}
     })
     const message = await response.json();
     console.log(message)
    
     setOn(true);
     setMessage(message.message);
    }
    
   
    
    return (
        <section className={classes.background}>
          <h1>Create Event</h1>
          <div className={classes.control}>
            {message}
            <form  onSubmit={submitHandler} id="createEvent" >
             <label htmlFor="title">Title:</label>
             <input type="text" name="title" ref={titleRef}  required/>
             <label htmlFor="address">Address:</label>
             <input type="text" name="address" ref={addressRef}  required/>
             <label htmlFor="city">City:</label>
             <input type="text" name="city" ref={cityRef}  required/>
             <label htmlFor="state">State:</label>
             <select defaultValue="Tennessee" name="state" ref={stateRef}  required>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option vaule="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="New+Hampshire">New Hampshire</option>
                <option value="New+Jersey">New Jersey</option>
                <option value="New+Mexico">New Mexico</option>
                <option value="New+York">New York</option>
                <option value="North+Carolina">North Carolina</option>
                <option value="North+Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode+Island">Rhode Island</option>
                <option value="South+Carolina">South Carolina</option>
                <option value="South+Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West+Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
             </select>
             <label htmlFor="date">Date:</label>
             <input type="date" name="date" ref={dateRef} required/>
             <label htmlFor="decription">Event Description:</label>
             <textarea name="description" rows="10" ref={eventDesRef} required></textarea>
             {/* view will be handled on the event */}
             <button className={classes.button}>Submit</button>
            </form>
          </div>
          
        </section>
      );
}
export default CreateEvent;