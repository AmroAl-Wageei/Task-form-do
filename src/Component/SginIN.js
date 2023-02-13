import React from "react";
import Haeder from "./Haeder";


function SginIN() {

console.log("signin");
  return (

    <div>
      
    <Haeder/>
    <div className="register">
      <form >
      <h5> Login </h5>
      <div className="container">
        
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="pass"> Password </label>
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Your password"
        />

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="loginbtn">Submit</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SginIN;


