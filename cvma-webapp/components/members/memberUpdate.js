import classes from "./memberUpdate.module.css";
import { useRef, useState, useEffect } from "react";

function MemberUpdate(props) {
 
    const [message, setMessage] = useState();
    const [messageOn, setMessageOn ] = useState(false);

    useEffect(() => {
      setMessageOn(false);
      const timer = setTimeout(() => setMessage(null), 10000);
      return () => clearTimeout(timer);
    }, [messageOn])
 
    const firstName = props.user.firstName;
    const lastName = props.user.lastName;
    const cellPhone = props.user.cellPhone;
    const homePhone = props.user.homePhone;
    const address = props.user.address;
    const city = props.user.city;
   const  state = props.user.state;
    const zip = props.user.zip;
    const roadName = props.user.roadName;
    const iceName = props.user.iceName;
    const iceNumber = props.user.iceNumber;
    const email = props.user.email;
    const memberId = props.user.memberId;
  

  const roadNameUpdateRef = useRef();
  const cellPhoneUpdateRef = useRef();
  const homePhoneUpdateRef = useRef();
  const addressUpdateRef = useRef();
  const cityUpdateRef = useRef();
  const stateUpdateRef = useRef();
  const zipUpdateRef = useRef();
  const iceNameUpdateRef = useRef();
  const iceNumberUpdateRef = useRef();
  const emailUpdateRef = useRef();
  const clearFields = () => {
  const formField = document.getElementById('memberUpdateForm');
  formField.reset();
  }
  async function updateMemberHandler(event) {
    event.preventDefault();
    let roadNameUpdate = roadNameUpdateRef.current.value;
    let cellPhoneUpdate = cellPhoneUpdateRef.current.value;
    let homePhoneUpdate = homePhoneUpdateRef.current.value;
    let addressUpdate = addressUpdateRef.current.value;
    let cityUpdate = cityUpdateRef.current.value;
    let stateUpdate = stateUpdateRef.current.value;
    let zipUpdate = zipUpdateRef.current.value;
    let iceNameUpdate = iceNameUpdateRef.current.value;
    let iceNumberUpdate = iceNumberUpdateRef.current.value;
    let emailUpdate = emailUpdateRef.current.value;
    //================================================================
    // write if condition for empty varialbes
    //================================================================
    
    if(!roadNameUpdate) {
      roadNameUpdate = roadName;
    }
    if(!cellPhoneUpdate) {
      cellPhoneUpdate = cellPhone;
    }
    if(!homePhoneUpdate) {
      homePhoneUpdate = homePhone;
    }
    if(!addressUpdate ) {
      addressUpdate = address;
    }
    if(!cityUpdate ) {
      cityUpdate = city;
    }
    if(!stateUpdate ) {
      stateUpdate = state;
    }
    if(!zipUpdate ) {
      zipUpdate = zip;
    }
    if(!emailUpdate ) {
      emailUpdate = email;
    }
    if(!iceNameUpdate ) {
      iceNameUpdate = iceName;
    }
    if(!iceNumberUpdate ) {
      iceNumberUpdate = iceNumber;
    }

    const response = await fetch("/api/members/memberUpdate", {
      method: "POST",
      body: JSON.stringify({
        memberId,
        roadNameUpdate,
        cellPhoneUpdate,
        homePhoneUpdate,
        iceNameUpdate,
        iceNumberUpdate,
        addressUpdate,
        cityUpdate,
        stateUpdate,
        zipUpdate,
        emailUpdate,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    clearFields();
    const responseMessage = <p className={classes.error}>{data.message}</p>
    setMessage(responseMessage)
    setMessageOn(true);

  }
  return (
    <section className={classes.background}>
      <h1>Member Information</h1>
      <div>
        {message ? message : ''}
        <div>
          {memberId} {firstName} {lastName}
        </div>
        <form onSubmit={updateMemberHandler} id="memberUpdateForm">
          <div className={classes.control}>
            <label htmlFor="roadName">Road Name:</label>
            <input
              type="text"
              name="roadName"
              id="roadName"
              placeholder={roadName}
              ref={roadNameUpdateRef}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder={email}
              ref={emailUpdateRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder={address}
              ref={addressUpdateRef}
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder={city}
              ref={cityUpdateRef}
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder={state}
              ref={stateUpdateRef}
            />
            <label htmlFor="zip">Zip: </label>
            <input
              type="text"
              name="zip"
              id="name"
              placeholder={zip}
              ref={zipUpdateRef}
            />
            <label htmlFor="homePhone">Home Phone Number:</label>
            <input
              type="text"
              name="homePhone"
              id="homePhone"
              placeholder={homePhone}
              ref={homePhoneUpdateRef}
            />
            <label htmlFor="cellPhone">Cell Phone Number</label>
            <input
              type="text"
              name="cellPhone"
              id="cellPhone"
              placeholder={cellPhone}
              ref={cellPhoneUpdateRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="iceName">ICE Name:</label>
            <input
              type="text"
              name="iceName"
              id="iceName"
              placeholder={iceName}
              ref={iceNameUpdateRef}
            />
            <label htmlFor="iceNumber">ICE Phone Number:</label>
            <input
              type="text"
              name="iceNumber"
              id="iceNumber"
              placeholder={iceNumber}
              ref={iceNumberUpdateRef}
            />
          </div>
          <button type="submit" className={classes.button}>
            Update!
          </button>
        </form>
      </div>
    </section>
  );
}

export default MemberUpdate;
