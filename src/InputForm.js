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
    const widthNum = this.state.width === '' ? 0 : this.state.width;
    const heightNum = this.state.width === '' ? 0 : this.state.width;
    this.props.onUpdateValues({ width: widthNum, height: heightNum });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" value={this.state.width} onChange={this.updateWidth} />
        <span> * </span>
        <input type="number" value={this.state.height} onChange={this.updateHeight} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;