import classes from './event-update.module.css';
import { useRef, useState} from 'react';

function EventUpdate(){
    const titleRef = useRef();
    const descrptionRef = useRef();
    const addressOneRef = useRef();
    const addressTwoRef = useRef();
    const dateRef = useRef();
    const featureRef = useRef();
    const imageRef = useRef();
    const [saved, setSaved] = useState()
    let savedMessage;
    
    async function submitHandler(event){
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descrptionRef.current.value;
        const addressOne = addressOneRef.current.value;
        const addressTwo = addressTwoRef.current.value;
        const date = dateRef.current.value;
        const image = imageRef.current.value;
        const feature = featureRef.current.value;


        
        const response = await fetch('/api/events/eventsupdate', {
         method: 'POST',
         body: JSON.stringify({title, description, addressOne, addressTwo, date, feature, image}),
         headers: { "Content-Type": "application/JSON" }
        }
        )
        const data = await response.json();
        if(response.ok){
            setSaved(data.message);
         savedMessage = <h5 className={classes.error} >{saved}</h5>
        }
        
    }

    return(
        <section className={classes.background}>
            <h1>Add New Event</h1>
            {savedMessage}

            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Event Description</label>
                    <textarea id="description" required ref={descrptionRef} rows="10" cols="40">

                    </textarea>
                </div>
                <div className={classes.control}>
                <label htmlFor="addressOne">Address 1</label>
                <input type="text" id="addressOne" required ref={addressOneRef} placeholder="Street Address"/>
                <label htmlFor="addressTwo">Address 2</label>
                <input type="text" id="addressTwo" required ref={addressTwoRef} placeholder="City State  Zip" />
                </div>
                <div className={classes.control}>
                <label htmlFor="eventType">Event Type</label>
                    <select className={classes.select} id="eventType" name="eventType" ref={imageRef} required>
                        <option value="images/Skully.png">Chapter events</option>
                        <option value="images/events/fullPatch.jpeg">State/Regional/National Events</option>
                        <option value="images/events/pokerRun.png">Poker Runs</option>
                    </select>
                </div>
                <div className={classes.control}>
                <label htmlFor="date">Date</label>
                <input type="date" required ref={dateRef} />
                <label htmlFor="feature">Public Event</label>
                <input type="checkbox" id="feature" name="feature" value="false" ref={featureRef} />
                
                </div>
                <div className={classes.control}>
                    <button type="submit" className={classes.button} >Add Evnet</button>
                </div>
            </form>
        </section>
    )
}

export default EventUpdate;