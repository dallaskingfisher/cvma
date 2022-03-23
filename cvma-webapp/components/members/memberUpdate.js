import classes from "./memberUpdate.module.css";
import { useRef } from "react";

function MemberUpdate(props) {
 

 
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

  async function updateMemberHandler(event) {
    event.preventDefault();
    const roadNameUpdate = roadNameUpdateRef.current.value;
    const cellPhoneUpdate = cellPhoneUpdateRef.current.value;
    const homePhoneUpdate = homePhoneUpdateRef.current.value;
    const addressUpdate = addressUpdateRef.current.value;
    const cityUpdate = cityUpdateRef.current.value;
    const stateUpdate = stateUpdateRef.current.value;
    const zipUpdate = zipUpdateRef.current.value;
    const iceNameUpdate = iceNameUpdateRef.current.value;
    const iceNumberUpdate = iceNumberUpdateRef.current.value;
    const emailUpdate = emailUpdateRef.current.value;
    console.log(addressUpdate);
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
    const message = await response.json();
    console.log(message);
  }
  return (
    <section className={classes.background}>
      <h1>Member Information</h1>
      <div>
        <div>
          {memberId} {firstName} {lastName}
        </div>
        <form onSubmit={updateMemberHandler}>
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
