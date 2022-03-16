import classes from "./login.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

/* plan to redirect after succussful reset to login page */
async function resetPasswd(memberNumber, email, address, passwd, passwdVerify) {
  const response = await fetch("/api/login/reset", {
    method: "POST",
    body: JSON.stringify({
      memberNumber,
      email,
      address,
      passwd,
      passwdVerify,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    return data.message;
  }
  return data.message;
}

function PasswordReset() {
  const [hasError, setHasError] = useState();
  const memberNumberRef = useRef();
  const passwdRef = useRef();
  const passwdVerifyRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const router = useRouter();

  async function passwordUpdateHandler(event) {
    event.preventDefault();
    setHasError('');
    const memberNumberVariable = memberNumberRef.current.value;
    const passwd = passwdRef.current.value;
    const passwdVerify = passwdVerifyRef.current.value;
    const emailVariable = emailRef.current.value;
    const addressVariable = addressRef.current.value;

    const memberNumber = memberNumberVariable.toUpperCase();
    const email = emailVariable.toLowerCase();
    const address = addressVariable.toLowerCase();
    //================================================================
    console.log(memberNumber, email, address);
    //================================================================
    if (
      memberNumber.includes("FM") ||
      memberNumber.includes("AUX") ||
      memberNumber.includes("S") ||
      memberNumber.includes("SAUX")
    ) {
    } else {
      setHasError("Member number must include FM, AUX, S, SAUX");
    }

    if (!email.includes("@")) {
      setHasError("Must be a valid email");
    }
    if (address.trim() === 0) {
      setHasError("Please put in address");
    }
    if (passwd !== passwdVerify) {
      setHasError("Passwords do not match");
    }
    if (!passwd.length >= 8) {
      setHasError("Password Must Be at Least 8 Characters Logn");
    }

 const response = await resetPasswd(
      memberNumber,
      email,
      address,
      passwd,
      passwdVerify
    );
    if(response){
      setHasError(response);
    } 
   
  }

  return (
    <section className={classes.auth}>
      <h1>Password Reset</h1>
      <p className={classes.error}>{hasError}</p>
      <form onSubmit={passwordUpdateHandler}>
        <div className={classes.control}>
          <label htmlFor="memNumber">Member Number</label>
          <input
            type="text"
            id="memNumber"
            required
            placeholder="FM1234, AUX1234, S1234, SAUX1234"
            ref={memberNumberRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Street Address</label>
          <input type="text" id="address" required ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwdRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="passwordVerify">Your Password</label>
          <input
            type="password"
            id="passwordVerify"
            required
            ref={passwdVerifyRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Reset</button>
        </div>
      </form>
    </section>
  );
}

export default PasswordReset;
