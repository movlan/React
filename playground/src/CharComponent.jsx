import React from "react";

export const CharComponent = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div onClick={props.removeLetter} style={style}>
      {props.letter}
    </div>
  );
};
