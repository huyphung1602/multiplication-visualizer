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

  renderCols(cols, row_index) {
    return cols.map ((col, col_index) =>
      <div key={`${row_index}${col_index}`}>
        {this.renderRect(col[0], col[1])}
      </div>
    );
  }

  renderRows(rows) {
    return rows.map ((row, row_index) =>
      <div className="rectangle-row" key={`${row_index}`} >
        { this.renderCols(row, row_index) }
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
    const result = width * height;
    if (isZero) {
      return `${rightSide} = 0`;
    }

    return `${rightSide} = ${this.rightSideFormula(rows)} = ${result}`;
  }
  
  render() {
    const { width, height } = this.props.size;
    const summandsArrays = inputAnalyzer.summandsArrays(width, height);
    const rows = preRenderer.buildMatrix(summandsArrays);

    return (
      <div className="visualization-board">
        <div className="rectangle-all">
          { this.renderRows(rows) }
        </div>
        <p>{this.formula(width, height, rows)}</p>
      </div>
    );
  }
}

export default Renderer;