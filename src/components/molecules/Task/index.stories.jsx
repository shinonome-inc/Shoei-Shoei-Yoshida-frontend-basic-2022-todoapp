import Task from "./index";

export default { component: Task };

export const Default = {
  args: {
    onEditComplete: () => console.log("edited"),
  },
};