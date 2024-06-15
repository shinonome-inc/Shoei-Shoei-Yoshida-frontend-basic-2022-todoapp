import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";

const Input = styled.input`
    width: 100%;
    height: 20px;
    padding: 0px 4px;
    border-radius: 2px;
    background-color: ${COLOR.BLACK};
`;

const InputComponent = ({ onClick }) => {
    return (
        <Input onClick={onClick} />
    );
};

export default InputComponent;