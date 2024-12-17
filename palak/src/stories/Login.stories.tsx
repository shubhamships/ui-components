import { Meta, StoryObj } from "@storybook/react";
import LoginFormCard from "../components/LoginFormCard";

const meta: Meta<typeof LoginFormCard> = {
  title: "Components/Login",
  component: LoginFormCard,
};
export default meta;

type Story = StoryObj<typeof LoginFormCard>;

export const LoginCard: Story = {
  args: {
    label: "Email",
    label2: "Password",
    buttonClass: "w-full bg-blue-500 text-white",
    button: "Login",
    heading: "Login",
  },
};

export const DetailsCard: Story = {
  args: {
    label2: "Email",
    label: "Username",
    buttonClass: "ml-28 bg-green-500 text-white",
    button: "Submit",
    heading: "Details",
  },
};
