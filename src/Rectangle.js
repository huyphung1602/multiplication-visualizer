import React from "react";

function Rectangle(props) {
  const offset = offSetCalculation(props.finalSize.width, props.finalSize.height);
  const sizeClass = {
    width: `${props.size.width * offset}px`,
    height: `${props.size.height * offset}px`
  };
  return (
    <div className="rectangle" style={sizeClass}>
      {props.size.width * props.size.height}
    </div>
  );
}

function offSetCalculation(width, height) {
  const defaultOffset = 10;
  const { innerWidth: windowW, innerHeight: windowH } = window;

  const intervalW = Math.floor(defaultOffset * width / (windowW/2));
  const intervalH = Math.floor(defaultOffset * height / (windowH/2));

  const interval = intervalW > intervalH ? intervalW : intervalH;
  if (defaultOffset - interval < 0) {
    return defaultOffset/interval;
  }
  return defaultOffset - interval;
}

export default Rectangle;