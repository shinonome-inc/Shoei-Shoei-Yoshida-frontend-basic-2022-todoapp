
const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon src={plus} alt="Add" />
      <Text>タスクを追加</Text>
    </Button>
  );
};

export default AddTaskButton;
const Text = styled.p`
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 6px;
  width: 126px;
  height: 24px;
  background: transparent;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  &:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: ${COLOR.GREEN};
    opacity: 0.2;
  }
`;
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

