import React from "react";

const EditButton = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default EditButton;
