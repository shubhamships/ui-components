import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter your age",
  },
};

export const Password: Story = {
  args: {
    type: "Password",
    placeholder: "Enter your Password",
  },
};

export const Date: Story = {
  args: {
    type: "Date",
    className: "cursor-pointer",
  },
};

export const File: Story = {
  args: {
    type: "File",
    className: "cursor-pointer",
  },
};
