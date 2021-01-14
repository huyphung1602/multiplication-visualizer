import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
    };
    this.updateWidth = this.updateWidth.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateWidth(event) {
    this.setState({width: event.target.value});
  }
  updateHeight(event) {
    this.setState({height: event.target.value});
  };

  handleSubmit(event) {
    this.props.onUpdateValues({ width: this.state.width, height: this.state.height });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Width: 
          <input type="number" value={this.state.width} onChange={this.updateWidth} />
        </label>
        <label> Height: 
          <input type="number" value={this.state.height} onChange={this.updateHeight} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;