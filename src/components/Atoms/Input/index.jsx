import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";

const Input = styled.input`
    width: 100%;
    height: 20px;
    padding: 0px 4px;
    border-radius: 2px;
    background-color: ${COLOR.BLACK};
`;

const InputComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <Input ref={inputRef} />;
};

export default InputComponent;
