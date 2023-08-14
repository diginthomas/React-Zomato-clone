import React from "react";

const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50px",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    />
  );
};

export default PreviousArrow;
