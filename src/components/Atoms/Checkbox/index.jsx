import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color.js";

const Button = styled.button`
    background-color: transparent;
    border: ${COLOR.LIGHT_GRAY} solid 2px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    padding: 2px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon src={check} alt="Add" />
    </Button>
  );
};

export default Checkbox;