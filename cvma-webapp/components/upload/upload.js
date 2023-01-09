
import classes from "./upload.module.css";

import { useState, useRef } from "react";

function UploadFiles() {
  const [file, setFile] = useState();
  const [loaded, setLoaded] = useState(false);
  const yearRef = useRef();
  const categoryRef = useRef();
  const monthRef = useRef();
  const fileNameRef = useRef();
  const uploadFileHandler = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
    setLoaded(true);
  };
  const clearFields = () => {
    const clearField = document.getElementById('upload');
    clearField.reset();
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    const category = categoryRef.current.value;
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    const fileName = fileNameRef.current.value;
    const formData = new FormData();
    if (category !== "meetingMinutes" || category !== "cebMinutes") {
      
      formData.append("file", file, file.name);
      formData.append("category", category);
      formData.append("fileName", fileName);
      formData.append("year", year);
      formData.append("month", month);
    } else {
      
      formData.append("file", file, file.name);
      formData.append("category", category);
      formData.append("year", year);
      formData.append("month", month);
    }
    const response = await fetch("/api/s3", {
      method: "POST",
      body: formData,
    });
    const message = await response.json();
    console.log(message)
    setLoaded(false)
    clearFields();
  };
  return (
    <section className={classes.background}>
      <form onSubmit={submitHandler} id="upload">
        <div className={classes.control}>
        <select name="category" ref={categoryRef}>
          <option value="meetingMinutes">Meeting Minutes</option>
          <option value="cebMinutes">CEB Minutes</option>
          <option value="roadCaptain">Road Captains</option>
          <option value="bylaws">Bylaws</option>
          <option value="application">applications</option>
          <option value="aux">Auxiliary</option>
          <option value="committees">Committees</option>
          <option vlaue="501c">501c3</option>
          <option value="treasures">Treasures Report</option>
        </select>
        </div>
        <div className={classes.control}>
        <select id="month" name="month" ref={monthRef}>
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
        </div>
        <div className={classes.control}>
        <input
          
          type="text"
          placeholder="Year"
          id="year"
          name="year"
          ref={yearRef}
          required
        />
        </div>
        <div className={classes.control}>
        <input
          type="text"
          placeholder="File Name"
          id="fileName"
          name="fileName"
          ref={fileNameRef}
          required
        />
        </div>
        <div className={classes.control}>
        <input type="file" name="file" onChange={uploadFileHandler} />
        {loaded ? file.size : null}
        </div>
        <button className={classes.button}>Submit</button>
      </form>
      </section>
)
}
export default UploadFiles;
