import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
  state = {
    listUser: [
      { id: 1, Name: "Dung", Age: 49 },
      { id: 2, Name: "Hoang", Age: 17 },
      { id: 3, Name: "Chien", Age: 32 },
    ],
  };

  handleAddnewUser = (userObject) => {
    this.setState({
      listUser: [userObject, ...this.state.listUser],
    });
  };
  render() {
    return (
      <>
        <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor>
        <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
      </>
    );
  }
}
export default Mycomponent;
