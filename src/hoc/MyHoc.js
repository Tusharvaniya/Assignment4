import React from "react";
import "../App.css";

const MyHoc = (MyComponent) => {
  const newcomp = (props) => {
    const PI = 3.14;
    return (
      <div className="bg">
        <MyComponent pi={PI} />
      </div>
    );
  };
  return newcomp;
};
export default MyHoc;
