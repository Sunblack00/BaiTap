import React, { Component } from "react";
import { useState } from "react";

const AddUserInfor = (props) => {
  const [Name, setName] = useState("Nguyễn Hoàng Sang");
  const [Age, setAge] = useState("21");
  const [Address, setAddress] = useState("IUH");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: Name,
      Age: Age,
    });
  };

  return (
    <div>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <span>Họ tên: {Name}</span>
        <br />
        <span>Tuổi: {Age}</span>
        <br />
        <span>Address: {Address}</span>
        <br />
        Họ tên:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => handleOnchangeInput(e)}
        />
        <br />
        Tuổi:{" "}
        <input
          type="number"
          placeholder="Enter your age"
          onChange={(e) => handleOnchangeAge(e)}
        />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
