import React, { Component } from "react";
import { useState } from "react";

const DisplayInfor = (props) => {
  const { listUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list User" : "Show list User"}
        </span>
      </div>

      {isShowHideListUser &&
        listUser.map((user) => {
          return (
            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
              <div>My name is: {user.Name} </div>
              <div>My age is: {user.Age} </div>
              <button
                onClick={() => {
                  props.handleDeleteUser(user.id);
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
export default DisplayInfor;
