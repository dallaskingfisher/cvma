import { useState, useRef } from "react";
import classes from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { signIn } from "next-auth/client";

//create registerUser function to update user in database


function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [hasError, setHasError] = useState("");
  const memberNumberRef = useRef();
  const emailRef = useRef(" ");
  const passwdRef = useRef();
  const passwdVerifyRef = useRef(" ");
  const router = useRouter();

  async function createPasswd(memNumber, email, passwd, passwdVerify) {
    const response = await fetch('/api/login/registerUser',{
      method: 'POST',
      body: JSON.stringify({memNumber,email,passwd,passwdVerify}),
      headers: {'Content-Type': 'application/json'}
    })
  
   const data = await response.json();
  
    
   console.log(data)
    if (!response.ok) {
      return data.message
    }
    setIsLogin(true);
    return "Password Set please login"
    
  } 

  async function submitHandler(event) {
    event.preventDefault();
    const memberNumber = memberNumberRef.current.value;
    
    const passwd = passwdRef.current.value;
   
    const memNumber = memberNumber.toUpperCase();
  
    if (isLogin) {
      if (
        memNumber.includes("FM") ||
        memNumber.includes("AUX") ||
        memNumber.includes("S") ||
        memNumber.includes("SAUX")
      ) {
      } else {
        setHasError("Member number must include FM, AUX, S, SAUX");
      }
      const result = await signIn("credentials", {
        redirect: false,
        memberNumber: memNumber,
        password: passwd,
      }); 

      if (!result.error) {
        router.replace("/members");
      } else {
        setHasError(result.error)
      }
    } else {
      //form validation
      const email = emailRef.current.value;
      const passwdVerify = passwdVerifyRef.current.value;
      if (
        memNumber.includes("FM") ||
        memNumber.includes("AUX") ||
        memNumber.includes("S") ||
        memNumber.includes("SAUX")
      ) {
      } else {
        setHasError("Member number must include FM, AUX, S, SAUX");
      }

      if (!email.includes("@")) {
        setHasError("Must be a valid email");
      }

      if (passwd !== passwdVerify) {
        setHasError("Passwords do not Match");
      }

      if (!passwd.length >= 8) {
        setHasError("Password must be at leaset 8 charater long");
      }
      

      const message = await createPasswd(memNumber, email, passwd, passwdVerify);


      console.log(message);
     

      setHasError(message)
    }
  }

  function switchAuthModeHandler(event) {
    event.preventDefault();
    setIsLogin(!isLogin);
  }
  const registerEmail = (
    <div className={classes.control}>
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" required ref={emailRef} />
    </div>
  );

  const registerVerifyPassword = (
    <div className={classes.control}>
      <label htmlFor="passwordVerify">Your Password</label>
      <input
        type="password"
        id="passwordVerify"
        required
        ref={passwdVerifyRef}
      />
    </div>
  );
  const passwdReset = (
    <Link href="/login/passwd-reset">
      <a className={classes.toggle}>Password Reset</a>
    </Link>
  );


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <p className={classes.error}>{hasError}</p>
      <form onSubmit={submitHandler}>
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
        {isLogin ? "" : registerEmail}
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwdRef} />
        </div>
        {isLogin ? "" : registerVerifyPassword}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Register Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Register new account" : "Login with existing account"}
          </button>
          {isLogin ? passwdReset : ""}
        </div>
      </form>
    </section>
  );
}
export default LoginSignup;
