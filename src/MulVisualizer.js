import React from "react";
import InputForm from "./InputForm"
import Renderer from "./Renderer"

class MulVisualizer extends React.Component {
  state = { width: 0, height: 0 }

  handleValues = (values) => {
    this.setState(values);
  }

  render() {
    return (
      <div>
        <InputForm onUpdateValues={this.handleValues}/>
        <Renderer size={{width: this.state.width, height: this.state.height}}/>
      </div>
    );
  }
}

export default MulVisualizer;