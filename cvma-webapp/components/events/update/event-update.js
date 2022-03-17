import classes from './event-update.module.css';
import { useRef, useState} from 'react';

function EventUpdate(){
    const titleRef = useRef();
    const descrptionRef = useRef();
    const addressOneRef = useRef();
    const addressTwoRef = useRef();
    const dateRef = useRef
    const [saved, setSaved] = useState()

    
    async function submitHandler(event){
        event.preventDefault();
        const title = titleRef.current.value;
        const description = discriptionRef.current.value;
        const addressOne = addressOneRef.current.value;
        const addressTwo = addressTwo.current.value;
        const date = dateRef.current.value;
        
        const response = await fetch('/api/events/eventUpdate', {
         method: 'POST',
         body: JSON.stringfy({title, description, addressOne, addressTwo, date}),
         headers: { "Content-Type": "application/JSON" }
        }
        
        const data = await response.json();
        
        setSaved(data.message);
    }

    return(
        <section className={classes.background}>
            <h1>Add New Event</h1>
            <form onSubmit={submitHandler}>
                <div className="classes.control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" require ref={titleRef} />
                </div>
                <div className="classes.control">
                    <label htmlFor="description" >Description</label>
                    <textarea id="description" col="5"require ref={descriptionRef}></textarea>
                </div>
                <div className="classes.contorl">
                <label htmlFor="address1">Address 1:</label>
                <input type="text" id="address1" require ref={addressOneRef} />
                <label htmlFor="address2">Address 2:</label>
                <input type="text" id="address2" require ref={addressTwoRef}/>
                </div>
                <div className="classes.control>
                <input type="date" id="date" require ref={dateRef}/>
                </div>
                <div>
                <button type="submit">Add Event</button>
                </div>
            </form>
        </section>
    )
}

export default EventUpdate;