import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color.js";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  &:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon src={pencil} alt="Edit" />
    </Button>
  );
};

export default EditButton;
