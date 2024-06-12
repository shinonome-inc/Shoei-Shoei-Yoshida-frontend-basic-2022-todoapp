import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";

const Button = styled.button`

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