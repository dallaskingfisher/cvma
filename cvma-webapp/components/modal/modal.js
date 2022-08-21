import classes from "./modal.module.css";
import { useRef, useState } from "react";
function Modal(props) {
  const memberObj = JSON.parse(props.members);
  const member = memberObj.find(
    (element) => element.memberId === props.memberId
  );

  const memberRole = props.member.role
  console.log(memberRole)
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
        roleUpdate
      }),
      headers: { "Content-Type": "application/json" }
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
          <div className="modal">
            <header className={classes.modal_header}>
              <h3>Member Information</h3>
            </header>
            <main className={classes.modal_content}>
              <form onSubmit={submitHandler}>
                <input type="text" placeholder={firstName} ref={firstNameRef} />
                <input
                  type="text"
                  placeholder={roadName ? roadName : "Road Name"}
                  ref={roadNameRef}
                />
                <input type="text" placeholder={lastName} ref={lastNameRef} />
                <br />
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
                <br />
                <input type="text" placeholder={address} ref={addressRef} />
                <input type="text" placeholder={city} ref={cityRef} />
                <br />
                <input type="text" placeholder={state} ref={stateRef} />
                <input type="text" placeholder={zip} ref={zipRef} />
                <br />
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
                <br />
                <select ref={roleRef}>
                    <option value="admin">Administrator</option>;
                    <option value="member">Member</option>;
                </select>
                <br />
                <label htmlFor="insureance">Insurance</label>
                <input type="checkbox" onChange={insureanceHandler} />
                <label htmlFor="registration">Registration</label>
                <input type="checkbox" onChange={registrationHandler} />
                <label htmlFor="driversLicense">Drivers License</label>
                <input type="checkbox" onChange={driverLicenseHandler} />
                <br />
                {insurance} {registration} {driverLicence}
              </form>
            </main>
            <footer className={classes.modal_footer}>
              <button className={classes.submit} onClick={submitHandler}>
                Submit
              </button>

              <button
                className={classes.modal_close}
                onClick={props.modalClose}
              >
                Cancel
              </button>

              <br />
              <button
                onClick={() => {
                  deleteUserHandler;
                }}
              >
                DELETE USER
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
