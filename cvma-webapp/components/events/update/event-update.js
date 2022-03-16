import classes from './event-update.module.css';

function EventUpdate(){


    return(
        <section className={classes.background}>
            <h1>Add New Event</h1>
            <form>
                <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" require />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" col="5"></textarea>
                </div>
            </form>
        </section>
    )
}

export default EventUpdate;