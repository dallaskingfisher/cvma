import classes from "./memberUpdate.module.css";
import { useEffect, useState } from "react";

function MemberUpdate(props) {
  const memberId = props.memberId;
  const [memberInfo, setMemberInfo ] = useState();

  useEffect(() => {
    fetch('/api/members',{
        method: 'POST' ,
        body: JSON.stringify({memberId}),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json()).then(data => setMemberInfo(data))
  },[])
  let firstName;
  let lastName;
  let cellPhone;
  let homePhone;
  let address;
  let city;
  let state;
  let zip;
  let roadName;
  let iceName;
  let iceNumber;
  console.log(memberInfo)
  if(!memberInfo){
      console.log('Loading...');
      const Loading = <p>Loading ...</p>
  } else{
    firstName = memberInfo.member.firstName;
    lastName = memberInfo.member.lastName;
    cellPhone = memberInfo.member.cellPhone;
    homePhone = memberInfo.member.homePhone;
    address = memberInfo.member.address;
    city = memberInfo.member.city;
    state = memberInfo.member.state;
    zip = memberInfo.member.zip;
    roadName = memberInfo.member.roadName;
    iceName = memberInfo.member.iceName;
    iceNumber = memberInfo.member.iceNumber;
  }

  return (
    <section className={classes.background}>
      <h1>Member Information</h1>
      <div>
        <div>{memberId} {firstName} {lastName}</div>
        <div className={classes.control}>
          <label htmlFor="roadName">Road Name:</label>
          <input type="text" name="roadName" id="roadName" value={roadName} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" value={address}/>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" value={city}/>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" id="state" value={state}/>
          <label htmlFor="zip">Zip: </label>
          <input type="text" name="zip" id="name" value={zip}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="iceName">ICE Name:</label>
          <input type="text" name="iceName" id="iceName" value={iceName}/>
          <label htmlFor="iceNumber">ICE Phone Number:</label>
          <input type="text" name="iceNumber" id="iceNumber" value={iceNumber} />
        </div>
        <button type="submit" className={classes.button}>
          Update!
        </button>
      </div>
    </section>
  );
}

export default MemberUpdate;
