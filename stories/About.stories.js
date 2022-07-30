/* eslint-disable import/no-anonymous-default-export */
import About from "../pages/about";

export default {
  title: "About",
  component: About,
};

const Template = (args) => <About {...args} />;

export const Summary = Template.bind({});

Summary.args = {
  backgroundColor: "purple",
  color: "blue",
};
