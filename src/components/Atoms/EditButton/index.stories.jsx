import EditButton from "./index";

export default {
  title: "Atoms/EditButton",
  component: EditButton,
};

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
