import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Text: Story = {
  args: {
    type: "Email",
  },
};

export const Open: Story = {
  args: {
    type: "Open",
    className: "text-white bg-green-500",
  },
};

export const Merged: Story = {
  args: {
    type: "Merged",
    className: "text-white bg-purple-500",
  },
};

export const Draft: Story = {
  args: {
    type: "Draft",
    className: "text-white bg-gray-400",
  },
};

export const Closed: Story = {
  args: {
    type: "Close",
    className: "text-red-500 bg-red-50 border border-red-500 text-xs",
  },
};
