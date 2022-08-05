import classes from "./documents.module.css";
import {useState, useEffect } from 'react';



function Documents() {
 const [years,setYears] = useState([]);
 const [docs, setDocs ] = useState([]);
 useEffect(() => {
  fetch('/api/document/years').then((res) => res.json()).then((data) => setYears(data.yearsArray));
  fetch('/api/document/').then((res) => res.json()).then((data) => setDocs(data.docsArray));
 },[])

  const refreshHandler =(e) =>{
    e.preventDefault();
    fetch('/api/document/years').then((res) => res.json()).then((data) => setYears(data.yearsArray));
    fetch('/api/document/').then((res) => res.json()).then((data) => setDocs(data.docsArray))
  }
const getData = (docs, cat, year, month) =>{
  if(cat !== 'meetingMinutes' || cat !== 'cebMinutes'){

  } else {
  let catArray = [];
  let yearArray = [];
  let docsArray = [];
  for (let i=0; i<docs.length; i++){
    if (docs[i][0] === cat){
      catArray.push([docs[i][0],docs[i][1],docs[i][2],docs[i][3],docs[i][4]])
    }
  }
  console.log(catArray);
  for (let i =0; i < catArray.length; i++){
    if(catArray[i][2] === year){
      yearArray.push([catArray[i][0],catArray[i][1],catArray[i][2],catArray[i][3],catArray[i][4]])
    }
  }
   console.log(yearArray)
   for (let i =0; i < yearArray.length; i++){
    console.log(yearArray[1][1])
    if(yearArray[i][1] === month){
      docsArray.push([yearArray[i][0],yearArray[i][1],yearArray[i][2],yearArray[i][3],yearArray[i][4]])
    }
  }}
  return docsArray;
  }

const docsData = getData(docs,'meetingMinutes','2013','jan')
  return (
    <section className={classes.background}>
     <h1>Documents</h1>
   
     <button onClick={refreshHandler} className={ classes.button}>Refresh</button>
     <div className={classes.control}>
     <select id="category" required>
        <option value='meeting'>Meeting Minutes</option>
        <option value='ceb'>CEB Minutes</option>
        <option value='rc'>Road Captain</option>
      </select>
      </div>
     <div className={classes.control}>
     <select id='yearlist'>
      { 
       years.map((year) => <option value={year}>{year}</option>)
      }
     </select>
     </div>
     <div className={classes.control}>
      <select id='months'>
        <option value='jan'>January</option>
        <option value="feb">Febuary</option>
        <option value='Mar'>March</option>
        <option value='apr'>April</option>
        <option value='may'>May</option>
        <option value='jun'>June</option>
        <option value='jul'>July</option>
        <option value='aug'>August</option>
        <option value='sep'>September</option>
        <option value='oct'>October</option>
        <option value='nov'>November</option>
        <option value='dec'>December</option>
      </select>
     </div>
    </section>
  );
}

export default Documents;
