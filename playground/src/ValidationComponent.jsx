import React from "react";

export const ValidationComponent = (props) => {
  if (props.textLength < 5) {
    return (
      <div>
        <p>Text too short</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Text long enough</p>
      </div>
    );
  }
};
