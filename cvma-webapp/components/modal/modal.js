import classes from "./modal.module.css";
import { useRef, useState } from "react";
function Modal(props) {
  const memberObj = JSON.parse(props.members);
  const member = memberObj.find(
    (element) => element.memberId === props.memberId
  );

  const adminRole = props.adminRole;
  const [insuranceCheckbox, setInsuranceCheckbox] = useState(false);
  const [registrationCheckbox, setRegistrationCheckbox] = useState(false);
  const [driverLicenseCheckBox, setDriverLicenseCheckBox] = useState(false);

  const insureanceHandler = () => {
    setInsuranceCheckbox(!insuranceCheckbox);
  };
  const registrationHandler = () => {
    setRegistrationCheckbox(!registrationCheckbox);
  };
  const driverLicenseHandler = () => {
    setDriverLicenseCheckBox(!driverLicenseCheckBox);
  };
  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const memberId = props.memberId;
  let firstName = "";
  let lastName = "";
  let cellPhone = "";
  let homePhone = "";
  let address = "";
  let city = "";
  let state = "";
  let zip = "";
  let roadName = "";
  let iceName = "";
  let iceNumber = "";
  let insurance = "";
  let registration = "";
  let driverLicence = "";
  let email = "";
  let role = "";

  if (member) {
    firstName = member.firstName;
    lastName = member.lastName;
    cellPhone = member.cellPhone;
    homePhone = member.homePhone;
    address = member.address;
    city = member.city;
    state = member.state;
    zip = member.zip;
    roadName = member.roadName;
    iceName = member.iceName;
    iceNumber = member.iceNumber;
    insurance = member.insureance;
    registration = member.registration;
    driverLicence = member.driverLicence;
    email = member.email;
    role = member.role;
  }

  // ref variables for form
  const roadNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const iceNameRef = useRef();
  const iceNumberRef = useRef();
  const homePhoneRef = useRef();
  const cellPhoneRef = useRef();
  const roleRef = useRef();

  const memberRoll = (role) => {
    if (role === "admin") {
      return (
        <select ref={roleRef} defaultValue="admin">
          <option value="admin">
            Administrator
          </option>
          ;<option value="member">Member</option>;
        </select>
      );
    } else {
      return (
        <select ref={roleRef} defaultValue="member">
          <option value="admin">Administrator</option>;
          <option value="member" >
            Member
          </option>
          ;
        </select>
      );
    }
  };

  const memberOption = memberRoll(role);
  const submitHandler = async (e) => {
    e.preventDefault();
    let roadNameUpdate = roadNameRef.current.value;
    let firstNameUpdate = firstNameRef.current.value;
    let lastNameUpdate = lastNameRef.current.value;
    let addressUpdate = addressRef.current.value;
    let cityUpdate = cityRef.current.value;
    let zipUpdate = zipRef.current.value;
    let stateUpdate = stateRef.current.value;
    let emailUpdate = emailRef.current.value;
    let iceNameUpdate = iceNameRef.current.value;
    let iceNumberUpdate = iceNumberRef.current.value;
    let homePhoneUpdate = homePhoneRef.current.value;
    let cellPhoneUpdate = cellPhoneRef.current.value;
    let roleUpdate = roleRef.current.value;
    if (!roadNameUpdate) {
      roadNameUpdate = roadName;
    }
    if (!firstNameUpdate) {
      firstNameUpdate = firstName;
    }
    if (!lastNameUpdate) {
      lastNameUpdate = lastName;
    }
    if (!addressUpdate) {
      addressUpdate = address;
    }
    if (!cityUpdate) {
      cityUpdate = city;
    }
    if (!stateUpdate) {
      stateUpdate = state;
    }
    if (!emailUpdate) {
      emailUpdate = email;
    }
    if (!iceNameUpdate) {
      iceNameUpdate = iceName;
    }
    if (!iceNumberUpdate) {
      iceNameUpdate = iceNumber;
    }
    if (!homePhoneUpdate) {
      homePhoneUpdate = homePhone;
    }
    if (!cellPhoneUpdate) {
      cellPhoneUpdate = cellPhone;
    }

    if (insuranceCheckbox) {
      insurance = currentDate;
    }
    if (registrationCheckbox) {
      registration = currentDate;
    }
    if (driverLicenseCheckBox) {
      driverLicence = currentDate;
    }
    const response = await fetch("/api/members/adminUpdate", {
      method: "POST",
      body: JSON.stringify({
        memberId,
        firstNameUpdate,
        roadNameUpdate,
        lastNameUpdate,
        addressUpdate,
        cityUpdate,
        zipUpdate,
        stateUpdate,
        emailUpdate,
        iceNameUpdate,
        iceNumberUpdate,
        homePhoneUpdate,
        cellPhoneUpdate,
        insurance,
        registration,
        driverLicence,
        roleUpdate,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  };
  const deleteUserHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/members/deleteUser", {
      method: "DELETE",
      body: JSON.stringify({ memberId }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    props.modalClose;
  };
  return (
    <div>
      {props.show ? (
        <div className={classes.modalContainer}>
          <div className={classes.modal}>
            <header className={classes.modal_header}>
              <h3 className={classes.modal_title}>Member Information</h3>
            </header>
            <main className={classes.modal_content}>
             {adminRole ? ( <form onSubmit={submitHandler}>
                <div className={classes.control}>
                  <input
                    type="text"
                    placeholder={firstName}
                    ref={firstNameRef}
                  />
                  <input
                    type="text"
                    placeholder={roadName ? roadName : "Road Name"}
                    ref={roadNameRef}
                  />
                  <input type="text" placeholder={lastName} ref={lastNameRef} />
                  <input type="email" placeholder={email} ref={emailRef} />
                  <input
                    type="text"
                    placeholder={homePhone ? homePhone : "Home Phone"}
                    ref={homePhoneRef}
                  />
                  <input
                    type="text"
                    placeholder={cellPhone ? cellPhone : "Cell Phone"}
                    ref={cellPhoneRef}
                  />
                  <input type="text" placeholder={address} ref={addressRef} />
                  <input type="text" placeholder={city} ref={cityRef} />
                  <input type="text" placeholder={state} ref={stateRef} />
                  <input type="text" placeholder={zip} ref={zipRef} />
                  <input
                    type="text"
                    placeholder={iceName ? iceName : "Ice Contact"}
                    ref={iceNameRef}
                  />
                  <input
                    type="text"
                    placeholder={iceNumber ? iceNumber : "Ice Contact Number "}
                    ref={iceNumberRef}
                  />
                  {memberOption}
                  <div className={classes.center}>
                    <div className={classes.formatCheckbox}>
                      <label htmlFor="insureance">Insurance</label>
                      <input type="checkbox" onChange={insureanceHandler} />
                      <p>{insurance}</p>
                    </div>
                    <div className={classes.formatCheckbox}>
                      <label htmlFor="registration">Registration</label>
                      <input type="checkbox" onChange={registrationHandler} />
                      <p>{registration}</p>
                    </div>
                    <div className={classes.formatCheckbox}>
                      <label htmlFor="driversLicense">Drivers License</label>
                      <input type="checkbox" onChange={driverLicenseHandler} />
                      <p>{driverLicence}</p>
                    </div>
                  </div>
                </div>
              </form>):(<div>
                        <h3>{`${firstName} ${roadName ? `"${roadName}"` : ''} ${lastName}`}</h3>
                        <h4 className={classes.h4margin}>Address:</h4>
                        <address>{`${address} ${city}, ${state} ${zip}`}</address>
                        <h4 className={classes.h4margin}>Email:</h4>
                        <email>{email}</email>
                        {homePhone ? (<h4 className={classes.h4margin}>Home Phone:</h4>): ''}
                        {homePhone ? (<phone>{homePhone}</phone>): ''}
                        {cellPhone ? (<h4 className={classes.h4margin}>Cell Phone:</h4>): ''}
                        {cellPhone ? (<phone>{cellPhone}</phone>): ''}
                        {iceName ? (<h4 className={classes.h4margin}>Ice Name:</h4>): ''}
                        {iceName ? iceName :''}
                        {iceNumber ? (<h4 className={classes.h4margin}>Ice Number:</h4>): ''}
                        {iceNumber ? iceNumber :''}
                        </div>)}
            </main>
            <footer className={classes.modal_footer}>
              <div className={classes.center}>
                {adminRole ? (
                  <button className={classes.button} onClick={submitHandler}>
                    Submit
                  </button>
                ) : (
                  ""
                )}

                <button className={classes.button} onClick={props.modalClose}>
                  {adminRole ? "Cancel" : "Close"}
                </button>
                {adminRole ? (
                  <button
                    className={classes.button}
                    onClick={() => {
                      deleteUserHandler;
                    }}
                  >
                    DELETE USER
                  </button>
                ) : (
                  ""
                )}
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
