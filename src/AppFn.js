import React, { useState } from "react";
import "./App.css";

function AppFn() {
  //const [state, setstate] = useState(initialState);
  const [name, setName] = useState("Ali");
  const [person, setPerson] = useState({
    fname: "Salah",
    lname: "Ben Salah",
    phone: 23456789,
  });
  const [newPerson, setNewPerson] = useState({
    nfname: "",
    nlname: "",
    nphone: "",
  });
  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };
  //setState = setter
  //getter = state
  //useState = initial State
  return (
    <div className="App-header">
      <h1>{name}</h1>
      <div>
        <h1>{person.fname}</h1>
        <h2>{person.phone}</h2>
      </div>
      <div>
        <input
          type="text"
          name="nfname"
          placeholder="your first name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nlname"
          placeholder="your last name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nphone"
          placeholder="your phone number"
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>{newPerson.nfname}</h1>
        <h1>{newPerson.nlname}</h1>
        <h1>{newPerson.nphone}</h1>
      </div>
    </div>
  );
}

export default AppFn;
