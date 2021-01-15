import React from "react";
import Reactangle from "./Rectangle"
import inputAnalyzer from "./inputAnalyzer"
import preRenderer from "./preRenderer"

class Renderer extends React.Component {
  renderRect(height = 34, width = 34) {
    const isZero = height === 0 || width === 0;
    if (isZero) {
      return;
    }
    return <Reactangle size={{width, height}} />;
  }

  renderCols(cols) {
    return cols.map (col =>
      this.renderRect(col[0], col[1])
    );
  }

  renderRows(rows) {
    return rows.map (row =>
      <div className="rectangle-row">
        { this.renderCols(row) }
      </div>
    );
  }

  rightSideFormula(rows) {
    const colMul = col => `${col[0]}*${col[1]}`;
    const rowMul = row => row.map(x => colMul(x)).join(' + ');
    return rows.map(row => rowMul(row)).join(' + ');
  }

  formula(width, height, rows) {
    const isZero = height === 0 || width === 0;
    const rightSide = width + ' * ' + height;
    if (isZero) {
      return `${rightSide} = 0`;
    }

    return `${rightSide} = ${this.rightSideFormula(rows)}`
  }
  
  render() {
    const { width, height } = this.props.size;
    const summandsArrays = inputAnalyzer.summandsArrays(width, height);
    const rows = preRenderer.buildMatrix(summandsArrays);

    return (
      <div className="visualization-board">
        <div className="rectangle-col">
          { this.renderRows(rows) }
        </div>
        <p>{this.formula(width, height, rows)}</p>
      </div>
    );
  }
}

export default Renderer;