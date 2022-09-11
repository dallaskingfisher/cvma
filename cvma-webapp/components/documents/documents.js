import classes from "./documents.module.css";
import { useState, useEffect, useRef } from "react";

function Documents(props) {
  const [years, setYears] = useState([]);
  const [docs, setDocs] = useState([]);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState();
  const catRef = useRef();
  const yearRef = useRef();
  const monthRef = useRef();

  useEffect(() => {
    fetch("/api/document/years")
      .then((res) => res.json())
      .then((data) => setYears(data.yearsArray));
    fetch("/api/document/")
      .then((res) => res.json())
      .then((data) => setDocs(data.docsArray));
  }, []);

  const refreshHandler = (e) => {
    e.preventDefault();
    fetch("/api/document/years")
      .then((res) => res.json())
      .then((data) => setYears(data.yearsArray));
    fetch("/api/document/")
      .then((res) => res.json())
      .then((data) => setDocs(data.docsArray));
      submitHandler(e);
  };

  const getMinutes = (docs, cat, year, month) => {
    let catArray = [];
    let yearArray = [];
    let docsArray = [];

    for (let i = 0; i < docs.length; i++) {
      if (docs[i][0] === cat) {
        catArray.push([
          docs[i][0],
          docs[i][1],
          docs[i][2],
          docs[i][3],
          docs[i][4],
        ]);
      }
    }

    for (let i = 0; i < catArray.length; i++) {
      if (catArray[i][2] === year) {
        yearArray.push([
          catArray[i][0],
          catArray[i][1],
          catArray[i][2],
          catArray[i][3],
          catArray[i][4],
        ]);
      }
    }

    for (let i = 0; i < yearArray.length; i++) {
      if (yearArray[i][1] === month) {
        docsArray.push([
          yearArray[i][0],
          yearArray[i][1],
          yearArray[i][2],
          yearArray[i][3],
          yearArray[i][4],
        ]);
      }
    }
    return docsArray;
  };

  const getOtherDocs = (docs, cat) => {
    const docsArray = [];
    for (let i = 0; i < docs.length; i++) {
      if (docs[i][0] === cat) {
        docsArray.push([
          docs[i][0],
          docs[i][1],
          docs[i][2],
          docs[i][3],
          docs[i][4],
        ]);
      }
    }
    return docsArray;
  };


  function submitHandler(event) {
    event.preventDefault();
    const cat = catRef.current.value;
    const year = yearRef.current.value;
    const month = monthRef.current.value;

    switch (cat) {
      case "meetingMinutes":
        const data1 = getMinutes(docs, cat, year, month);
        console.log(data1);
        setResults(data1);
        break;
      case "cebMinutes":
        const data2 = getMinutes(docs, cat, year, month);
        setResults(data2);
        break;
      default:
        const data3 = getOtherDocs(docs, cat);
        setResults(data3);
    }
  }
  if (!results) {
  } else {
    const values = [];
    for (let i = 0; i < results.length; i++) {
      values.push(results[i][3], results[i][4]);
    }
  }
  //VALUES MUST MATCH UPLOAD.JS FOR CATEGORY DROP DOWN AND VERIFY THE MATCH BEFORE ADDING TO PRODUCTION!!
  
  const deleteHanlder = async (location) => {
    console.log(location);
    const response = await fetch("/api/document/s3-delete", {
      method: "DELETE",
      body: JSON.stringify({
        location,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if(response.status === 200) {
        setMessage("File Deleted");
    }
  
  };
  return (
    <section className={classes.background}>
      <h1>Documents</h1>

      <button onClick={refreshHandler} className={classes.button}>
        Refresh
      </button>
      <form id="getDocs" onSubmit={submitHandler}>
        <div className={classes.control}>
          <select id="category" ref={catRef}>
            <option value="meetingMinutes">Meeting Minutes</option>
            <option value="cebMinutes">CEB Minutes</option>
            <option value="roadCaptain">Road Captain</option>
            <option value="bylaws">Bylaws</option>
            <option value="application">applications</option>
            <option value="aux">Auxiliary</option>
            <option value="committees">Committees</option>
            <option vlaue="501c">501c3</option>
            <option value="treasures">Treasures Report</option>
          </select>
        </div>
        <div className={classes.control}>
          <select id="yearlist" ref={yearRef}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <select id="months" ref={monthRef}>
            <option value="jan">January</option>
            <option value="feb">Febuary</option>
            <option value="Mar">March</option>
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
        <div>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
      <div>
        {!results
          ? ""
          : results.map((value) => (
              <span key={value[4]}>
                <a href={value[4]} className={classes.link}>
                  {value[3]}
                </a>
                {props.adminRole ?<button
                  className={classes.delete}
                  onClick={() =>deleteHanlder(value[4])}
                >
                  Delete
                </button> : null}
                <br></br>
              </span>
            ))}
        <h3>{message}</h3>
      </div>
    </section>
  );
}

export default Documents;
