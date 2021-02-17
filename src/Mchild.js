import React, { Fragment } from "react";
import { FirstName } from "./App";

const Mchild = () => {
  // {
  //   console.log("IN Mchild");
  // }
  return (
    <Fragment>
      <FirstName.Consumer>
        {(value) => {
          return <h1>Name with context : {value}</h1>;
        }}
      </FirstName.Consumer>
    </Fragment>
  );
};
export default React.memo(Mchild);
// export default Mchild;
