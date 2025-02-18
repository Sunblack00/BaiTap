import React from "react";
class Childcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Eric",
      Age: 28,
    };
  }
  handleInput = (event) => {
    this.setState({
      valueInput: event.target.value,
    });
  };

  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //ngăn việc tải lại trang
    //console.log(this.state)
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
          <div>
            My name is: {this.state.Name}
            <br />
            Address: {this.state.Address}
          </div>
          <input
            type="text"
            value={this.state.Name} //gán giá trị mặc định
            onChange={(event) => this.handleOnchangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default Childcomponent;
