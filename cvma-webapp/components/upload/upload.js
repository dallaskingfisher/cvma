import { useS3Upload } from "next-s3-upload";
import { useState, useEffect, useRef } from "react";
import classes from "./upload.module.css";

function UploadFiles() {
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [location, setLocation] = useState();
  const [dbUpload, setDbUpload] = useState(false);
  
  const [message, setMessage] = useState();
  const [onMessage, setOnMessage] = useState(false);
  useEffect(() => {
    setDbUpload(false);
   

    const timer = setTimeout(() => setLocation(null), 2000);
    return () => clearTimeout(timer);
  }, [dbUpload]);

  useEffect(() => {
    setOnMessage(false);
    const messageTimer = setTimeout(() => setMessage(null), 10000);
    return () => clearTimeout(messageTimer);
  }, [onMessage]);
  const handleFileChange = async (file) => {
    let { url } = await uploadToS3(file);
    setLocation(url);
  };

  const catRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const fileNameRef = useRef();
  function clearFields() {
    const formField = document.getElementById("uploadForm");
    formField.reset();
  }
  async function submitHandler(event) {
    event.preventDefault();
    const category = catRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    const fileName = fileNameRef.current.value;
    const address = location;
    if (address === null) {
      setMessage("File not loaded");
      setOnMessage(true);
      return;
    } else {
      let data = {
        category: category,
        month: month,
        year: year,
        title: fileName,
        location: address,
      };
      const response = await fetch("/api/document/upload", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

       const resposneData = await response.json();
      clearFields();
      console.log(data);
       setMessage(resposneData.message);
      setOnMessage(true);
      setDbUpload(true);
    }
  }

  return (
    <section className={classes.background}>
      <h1>Upload</h1>
      <h5>{message}</h5>
      <FileInput onChange={handleFileChange} />
        <button onClick={openFileDialog} className={classes.button}>
          Upload
        </button>
      <form onSubmit={submitHandler} id="uploadForm">
        <div className={classes.control}>
          <select id="fileTypes" ref={catRef}>
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
        </div>
        <div className={classes.control}>
          {" "}
          <input
            type="text"
            placeholder="Year"
            id="year"
            ref={yearRef}
            required
          />
        </div>
        <div className={classes.control}>
          <input
            type="text"
            placeholder="File Name"
            id="fileName"
            ref={fileNameRef}
            required
          />
        </div>
        <div>
        
        </div>
       
        <button id="submit" className={classes.button}>
          Submit
        </button>
      </form>

      <p>{location}</p>
    </section>
  );
}
export default UploadFiles;
