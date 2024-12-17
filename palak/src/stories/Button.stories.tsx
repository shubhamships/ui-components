import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "text-white bg-blue-500",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    className: "text-white bg-red-500",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    className: "text-blue-500 border border-blue-500",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    className: "text-white bg-green-500",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    className: "text-orange-500 rounded-full border border-orange-500",
  },
};
