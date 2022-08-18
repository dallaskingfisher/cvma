import classes from "./modal.module.css"

function Modal (props) {


    return (
        <div>
        {props.show ?            <div className={classes.modalContainer}>
                <div className="modal">
                <header className={classes.modal_header}>
                    <h3>Member Information</h3>
                </header>
                <main className={classes.modal_content}>
                    main content
                </main>
                <footer className={classes.modal_footer}>
                    <button className={classes.submit}>Submit</button>
                    <button className={classes.modal_close}onClick={props.modalClose}>Cancel</button>
                </footer>
                </div>
                </div>  : null }
        </div> 
    )
}

export default Modal;