import React from "react";
import styled from "styled-components";

const Input = styled.input`
`;

const InputComponent = ({ onClick }) => {
    return (
        <Input onClick={onClick} />
    );
};

export default InputComponent;