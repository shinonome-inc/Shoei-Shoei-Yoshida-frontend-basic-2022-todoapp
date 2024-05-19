import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};
  ${TEXT.L};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.M};
  }
`;
