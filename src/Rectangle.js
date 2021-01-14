import React from "react";

function Rectangle(props) {
  const offset = 10;
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

export default Rectangle;