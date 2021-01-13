import React from "react";

function Rectangle(props) {
  const offset = 10;
  const sizeClass = {
    width: `${props.width * offset}px`,
    height: `${props.height * offset}px`
  };
  return (
    <div className="square" style={sizeClass}>
      {props.width * props.height}
    </div>
  );
}

export default Rectangle;