import InputComponent from "./index";

export default { component: InputComponent };

export const Default = {
  args: {
    onEditComplete: () => console.log("edited"),
  },
};
