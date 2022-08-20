import {useRef,useState} from 'react';

function  Test () {
    const [checkbox , setCheckbox ] = useState(false)
 
    function onChangeHanlder (){
    setCheckbox(!checkbox)
     
    }
     console.log(checkbox);
    const submitHandler =(e) => {
        e.preventDefault();
       if(checkbox){
        const newDate = new Date();
       // let date = `${newDate.getDay()}-${newDate.getMonth()}`;
       let date = newDate.toString()
       }else{  date = ''}
       console.log(date)        
     
    }
    return(
        <div>
             
            <form onSubmit={submitHandler}>
                <input type="checkbox" name="test" value={checkbox} onChange={onChangeHanlder} />
                <button>Submit</button>
               
            </form>

        </div>
    )
}
export default Test;