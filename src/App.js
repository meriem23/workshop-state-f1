import React, { Component } from "react";
import "./App.css";
import Info from "./Info";
import MyData from "./MyData";

class App extends Component {
  // constructor(props) {
  //   console.log("this is the constructor");
  //   super(props);
  //   this.state = {
  //     fname: "Ali",
  //     lname: "BenAli",
  //     age: 25,
  //     isWorking: false,
  //     count: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //   };
  // }

  state = {
    fname: "Ali",
    lname: "BenAli",
    age: 25,
    isWorking: false,
    count: 0,
    name: "",
    email: "",
    password: "",
    show: false,
  };
  btnPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  btnMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  showData = () => {
    this.setState({ show: !this.state.show });
  };
  // handleChangeEmail = (e) => {
  //   // console.log(e);
  //   this.setState({ email: e.target.value });
  // };
  // handleChangePassword = (e) => {
  //   // console.log(e);
  //   this.setState({ password: e.target.value });
  // };
  render() {
    console.log("this is the render");
    return (
      <div className="App-header">
        <h1>Hello</h1>
        <h2>
          Hello my name is {this.state.fname}, I'm {this.state.age} years old.
        </h2>
        <button onClick={this.btnPlus}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.btnMinus}>-</button>
        <div>
          <input
            type="text"
            name="name"
            placeholder="your name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="your email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="your password"
            onChange={this.handleChange}
          />
        </div>
        <Info data={this.state} />
        <button onClick={this.showData}>show Data</button>
        {this.state.show ? <MyData /> : <p>Sorry 🛑</p>}
      </div>
    );
  }
  componentDidMount() {
    console.log("hello ");
  }
}
export default App;
