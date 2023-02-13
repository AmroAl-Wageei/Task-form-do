import React, { useState } from "react";
import Haeder from "./Haeder";

function Do() {
  const [Do, setDo] = useState("");
  const [updated, setUpdated] = useState(Do);
  const [array] = useState([]);

  //   const [data, setData] = useState('');
  function addData(e) {
    e.preventDefault();
    setUpdated(Do);


    array.push({
        Do: Do,
    });
  }

  console.log(array);
  return (
    <div>
      <Haeder />

      <h1>To Do List </h1>

      <form className="do" onSubmit={Do}>
        <input
          type="text"
          name="do-list"
          value={Do}
          required
          placeholder="Do List ...."
          onChange={(e) => setDo(e.target.value)}
        />

        <button type="submit" onClick={addData} className="registerbtn">
          Add
        </button>
      </form>

      <h5>
        <ul>
          <li style={{ color: "black" }}>{Do}</li>
          <li style={{ color: "black" }}>{updated}</li>
        </ul>
      </h5>
    </div>
  );
}

export default Do;
