import React from "react";
class AddUserInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Eric",
      Age: 28,
    };
  }

  handleOnchangeInputName = (event) => {
    this.setState({
      Name: event.target.value
    });
  };

  handleOnchangeInputAge = (event) => {
    this.setState({
      Age: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); 
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: this.state.Name,
      Age: this.state.Age,
    });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
          Your name <input
            type="text"
            value={this.state.Name} 
            onChange={(event) => this.handleOnchangeInputName(event)}
          />
          <br />
          Your Age <input
            type="text"
            value={this.state.Age} 
            onChange={(event) => this.handleOnchangeInputAge(event)}
          />
          <br />
        <button>Submit</button>
        </form>

      </>
    );
  }
}
export default AddUserInfor;
