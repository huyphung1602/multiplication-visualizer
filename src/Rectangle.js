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
  const defaultOffset = 1.5;
  const { innerWidth: windowW, innerHeight: windowH } = window;
  const numberW = windowW / (width * defaultOffset);
  const numberH = windowH / (height * defaultOffset);

  if (numberW < numberH) {
    return numberW;
  }

  return numberH;
}

export default Rectangle;