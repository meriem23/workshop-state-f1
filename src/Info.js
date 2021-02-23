import React from "react";

const Info = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.password}</p>
    </div>
  );
};

export default Info;
