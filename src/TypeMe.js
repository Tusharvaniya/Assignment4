import React, { Component, Fragment } from "react";
import MyHoc from "./hoc/MyHoc.js";
import Mchild from "./Mchild";
import RenderPropExample from "./RenderPropExample";

class TypeMe extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { typing: "", is_typing: false };
  }

  writing = (event) => {
    this.setState({ typing: event.target.value, is_typing: true });
    this.myRef.current.style.color = "red";

    setTimeout(() => {
      console.log("herer");
      this.setState({ is_typing: false });
    }, 700);
  };

  render() {
    return (
      <Fragment>
        {console.log(" == this  is Type me component == ")}
        {/* {console.log(this.props)} */}

        <input
          type="text"
          className="inputBox"
          placeholder="Type Here..."
          onChange={(event) => {
            this.writing(event);
          }}
        />

        <h3>{this.state.is_typing ? "Typing..." : ""}</h3>

        {/* <p>{this.state.typing}</p> */}
        <p ref={this.myRef}>PI from HOC : {this.props.pi}</p>
        <Mchild />

        <RenderPropExample
          render={() => {
            return <div>{this.state.typing}</div>;
          }}
        />
      </Fragment>
    );
  }
}

export default MyHoc(TypeMe);
