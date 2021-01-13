import React from "react";
import Reactangle from "./Rectangle"
import "./index.css";

class Visualization extends React.Component {
  renderRect(height = 34, width = 34) {
    return <Reactangle width={width} height={height} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderRect(10, 20)}
          {this.renderRect(10, 3)}
        </div>
        <div className="board-row">
          {this.renderRect(4, 20)}
          {this.renderRect(4, 3)}
        </div>
        <p>23 * 14 = 20*10 + 3*10 + 20*4 + 3*4</p>
      </div>
    );
  }
}

export default Visualization;