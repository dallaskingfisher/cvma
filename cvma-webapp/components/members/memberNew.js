import classes from "./memberNew.module.css";
import { useRef, useState } from "react";

function MemberNew() {
  const [message, setMessage] = useState();

  const memberIdRef = useRef();
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
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const roleRef = useRef();

  async function newMemberHandler(event) {
    event.preventDefault();
    const memberId = memberIdRef.current.value;
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
    const lastNameUpdate = lastNameRef.current.value;
    const firstNameUpdate = firstNameRef.current.value;
    const role = roleRef.current.value;

    const response = await fetch("/api/members/memberNew", {
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
        lastNameUpdate,
        fisrtNameUpdate,
        role
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if(data.message){
        const responseMessage = <p className={classes.error}>Member Added</p>;
        setMessage(responseMessage);
    }
   
  }
  return (
    <section className={classes.background}>
      <h1>Member Information</h1>
      <div>
        {message ? message : ""}
       <div><p>New Member</p></div>
        <form onSubmit={newMemberHandler}>
          <div className={classes.control}>
            <label htmlFor="memberNumber">Member Number</label>
            <input
              type="text"
              name="memberNumber"
              id="memberNumber"
              ref={memberIdRef}
            />
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" ref={firstNameRef} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" ref={lastNameRef} />
            <label htmlFor="roadName">Road Name:</label>
            <input
              type="text"
              name="roadName"
              id="roadName"
              ref={roadNameUpdateRef}
            />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" ref={emailUpdateRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              ref={addressUpdateRef}
            />
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" ref={cityUpdateRef} />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="state" ref={stateUpdateRef} />
            <label htmlFor="zip">Zip: </label>
            <input type="text" name="zip" id="name" ref={zipUpdateRef} />
            <label htmlFor="homePhone">Home Phone Number:</label>
            <input
              type="text"
              name="homePhone"
              id="homePhone"
              ref={homePhoneUpdateRef}
            />
            <label htmlFor="cellPhone">Cell Phone Number</label>
            <input
              type="text"
              name="cellPhone"
              id="cellPhone"
              ref={cellPhoneUpdateRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="iceName">ICE Name:</label>
            <input
              type="text"
              name="iceName"
              id="iceName"
              ref={iceNameUpdateRef}
            />
            <label htmlFor="iceNumber">ICE Phone Number:</label>
            <input
              type="text"
              name="iceNumber"
              id="iceNumber"
              ref={iceNumberUpdateRef}
            />
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" ref={roleUpdateRef}>
                <option value="admin">Administrator</option>
                <option value="member">Member</option>
              </select>
          </div>
          <button type="submit" className={classes.button}>
            Update!
          </button>
        </form>
      </div>
    </section>
  );
}

export default MemberNew;
