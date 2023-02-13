import React, { Component } from "react";
import { Link , NavLink } from 'react-router-dom';

class Haeder extends Component {
  render() {
    return (
      <div>
        <header className="hide-when-mobile">
          <Link to="/">
            <h1> Form Task  </h1>
          </Link>
          <ul className="flex">
            <li className="main-list">
              <NavLink className="main-link" to="/">
                Register 
              </NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/in">
                Login
              </NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/do">
                To Do List
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Haeder;
