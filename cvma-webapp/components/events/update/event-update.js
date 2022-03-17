import classes from './event-update.module.css';
import { useRef, useState} from 'react';

function EventUpdate(){
    const titleRef = useRef();
    const descrptionRef = useRef();
    const addressOneRef = useRef();
    const addressTwoRef = useRef();
    const dateRef = useRef();
    const featureRef = useRef();
    const [saved, setSaved] = useState()
    let savedMessage;
    
    async function submitHandler(event){
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descrptionRef.current.value;
        const addressOne = addressOneRef.current.value;
        const addressTwo = addressTwoRef.current.value;
        const date = dateRef.current.value;
        const feature = featureRef.current.value;


        
        const response = await fetch('/api/events', {
         method: 'POST',
         body: JSON.stringfy({title, description, addressOne, addressTwo, date, feature}),
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
                    <input type="text" id="title" require ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Event Description</label>
                    <textarea id="description" require ref={descrptionRef} rows="10" cols="40">

                    </textarea>
                </div>
                <div className={classes.control}>
                <label htmlFor="addressOne">Address 1</label>
                <input type="text" id="addressOne" require ref={addressOneRef} placeholder="Street Address"/>
                <label htmlFor="addressTwo">Address 2</label>
                <input type="text" id="addressTwo" require ref={addressTwoRef} placeholder="City State  Zip" />
                </div>
                <div className={classes.control}>
                <label htmlFor="date">Date</label>
                <input type="date" require ref={dateRef} />
                <label htmlFor="feature">Public Event</label>
                <input type="checkbox" id="feature" name="feature" value="true" ref={featureRef} />
                
                </div>
                <div className={classes.control}>
                    <button type="submit" className={classes.button} >Add Evnet</button>
                </div>
            </form>
        </section>
    )
}

export default EventUpdate;