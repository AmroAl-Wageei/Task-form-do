import React, { useState } from "react";
import Haeder from "./Haeder";
// import axios from "axios";

function SginUp() {
  console.log("Signup");

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCon, setPasswordCon] = useState("");

  const [Accept, setAccept] = useState(false);
  const [array] = useState([]);

  //   const [flag, setflag] = useState(true);

  console.log(array);
  //   console.log(flag);

  function submit(e) {
    e.preventDefault();
    array.push({
      name: Name,
      email: Email,
      pass: Password,
    });
    setAccept(true);
    localStorage.setItem("data", JSON.stringify(array));
  }

  return (
    <div>
      <Haeder />

      <div className="register">
        <form onSubmit={submit}>
          <div className="container">
            <h5> Register </h5>
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              id="name"
              name="name"
              value={Name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />

            {Name === "" && Accept && (
              <p className="error"> user name is required</p>
            )}

            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={Email}
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="pass"> Password </label>
            <input
              type="password"
              id="pass"
              name="password"
              value={Password}
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {Password.length < 5 && Accept && (
              <p className="error">Passowrd Must be more than 5 char </p>
            )}

            <label htmlFor="Con-pass"> Confirm Password </label>
            <input
              type="password"
              id="Con-pass"
              name="Con-password"
              value={PasswordCon}
              placeholder="Confirm password"
              onChange={(e) => setPasswordCon(e.target.value)}
            />
            {Password !== PasswordCon && Accept && (
              <p className="error"> Passowrd does not match </p>
            )}

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="registerbtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SginUp;

//   let res = axios
//     .post("http://127.0.0.1:8000/api/register", {
//       name: Name,
//       email: Email,
//       password: Password,
//       password_confirmation: PasswordCon,
//     })
//     .then((A) => console.log(A));
// }
