import { Component, Fragment } from "react";
class FragmentExample extends Component {
  state = { click: 0 };

  clicked = (event) => {
    this.setState({ click: event.target.value + 1 });
  };

  render() {
    return (
      <Fragment>
        {console.log(" == this  is fragmentexample component == ")}
        <button
          onClick={(event) => {
            this.clicked(event);
          }}
        >
          Click Me
        </button>
        <h2> {this.state.click} : Times clicked</h2>
      </Fragment>
    );
  }
}

export default FragmentExample;

// const FragmentExample = (props) => {
//   const fn = (type) => {
//     if (type === "info") {
//       return type;
//     }
//   };

//   return (
//     <div>
//       <p>{fn(props.type)}</p>
//       {console.log("=== banner")}
//     </div>
//   );
// };
// export default FragmentExample;
