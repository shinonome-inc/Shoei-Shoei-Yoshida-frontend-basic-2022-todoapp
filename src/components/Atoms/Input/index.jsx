import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 20px;
    padding: 0px 4px;
`;

const InputComponent = ({ onClick }) => {
    return (
        <Input onClick={onClick} />
    );
};

export default InputComponent;