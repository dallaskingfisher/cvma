
import { useS3Upload } from 'next-s3-upload';
import { useState, useEffect, useRef } from 'react';

 

function UploadFiles () {
    const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
    const [location, setLocation] = useState();
    const [dbUpload, setDbUpload] = useState(false)
    const [year , setYear] = useState();
    const [fileName, setFileName] = useState()
    useEffect(() =>{
         setDbUpload(false);
         setYear(null);
         setFileName(null);
       
         const timer = setTimeout(() => setLocation(null), 2000)  
         return () => clearTimeout(timer); 
       
    }, [dbUpload])
    const handleFileChange = async file => {
        let { url } = await uploadToS3(file);
        setLocation(url)
      };
     
   
const catRef = useRef();
const monthRef = useRef();
// const yearRef = useRef();
// const titleRef = useRef();


function clearFields () {
   const yearField = document.getElementById('year');
   const textField = document.getElementById('fileName');

   yearField.value = '';
   textField.value = '';
}
function submitHandler(event) {
    event.preventDefault();
     const category = catRef.current.value;
     const month = monthRef.current.value;
    //  const year = yearRef.current.value;
    //  const title = titleRef.current.value;
     const address = location;

     let data = {
        category: category,
        month: month,
        year: year,
        title: fileName,
        location: address
     }
     clearFields()
     console.log(data);
     setDbUpload(true);
}
    
 return (
    <section>
        <form onSubmit={submitHandler}>
            <select id="fileTypes" ref={catRef}>
                <option value="meetingMinutes">Meeting Minutes</option>
                <option value="cebMinuts">CEB Minutes</option>
                <option value="roadCaptain">Road Captains</option>
            </select>
            <select id="month" ref={monthRef}>
                <option value="jan">January</option>
                <option value="feb">Febuary</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
            </select>
            <input type="text" placeholder="Year" id="year" onChange={(e) => {setYear(e.target.value)}}/>
            <input type='text' placeholder="File Name" id='fileName' onChange={(e) => {setFileName(e.target.value)}}/>
            <button id="submit">Submit</button>
        </form>
        <FileInput onChange={handleFileChange} />
        <button onClick={openFileDialog}>Upload</button>
        <p>{location}</p>
       
    </section>
 )
}
export default UploadFiles;