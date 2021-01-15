import React from "react";
import Reactangle from "./Rectangle"
import inputAnalyzer from "./inputAnalyzer"
import preRenderer from "./preRenderer"

class Renderer extends React.Component {
  renderRect(height = 34, width = 34) {
    return <Reactangle size={{width, height}} />;
  }

  renderCols(cols) {
    return cols.map (col =>
      this.renderRect(col[0], col[1])
    );
  }

  renderRows(rows) {
    return rows.map (row =>
      <div className="visualization-row">
        { this.renderCols(row) }
      </div>
    );
  }

  renderFormula(rows) {
    const colMul = col => `${col[0]}*${col[1]}`;
    const rowMul = row => row.map(x => colMul(x)).join(' + ');
    return rows.map(row => rowMul(row)).join(' + ');
  }

  
  render() {
    const { width, height } = this.props.size;
    const summandsArrays = inputAnalyzer.summandsArrays(width, height);
    const rows = preRenderer.buildMatrix(summandsArrays);

    return (
      <div className="visualization-board">
        { this.renderRows(rows) }
        <p>{`${width} * ${height} = ${this.renderFormula(rows)}`}</p>
      </div>
    );
  }
}

export default Renderer;