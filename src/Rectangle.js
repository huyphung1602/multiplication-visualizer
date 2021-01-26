import React from "react";

function Rectangle(props) {
  const offset = offSetCalculation(props.finalSize.width, props.finalSize.height);
  console.log(offset);
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
  let interval = 0;

  if (width > height) {
    interval = Math.floor(width/40);
  } else {
    interval = Math.floor(height/40);
  }

  if (defaultOffset - interval < 0) {
    return 1;
  }
  return defaultOffset - interval;
}

export default Rectangle;