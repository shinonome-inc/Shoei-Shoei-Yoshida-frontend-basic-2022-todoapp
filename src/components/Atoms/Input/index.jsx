import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

const Input = styled.input`
    width: 100%;
    height: 20px;
    padding: 0px 4px;
    border-radius: 2px;
    background-color: ${COLOR.BLACK};
    color: ${COLOR.LIGHT_GRAY};
    font-size: ${TEXT.S};
    font-family: ${FONTFAMILY.NOTO_SANS};
`;

const InputComponent = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete(inputRef.current.value);
    }
  };

  return (
    <Input
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputComponent;
