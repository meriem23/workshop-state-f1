import React, { Component } from "react";

export default class MyData extends Component {
  componentWillUnmount = () => {
    alert("This component Will unmount, he was killed...😥😭😭😭😭");
  };
  render() {
    return (
      <div>
        <p>My data are secrets 😁😁😁</p>
      </div>
    );
  }
}
