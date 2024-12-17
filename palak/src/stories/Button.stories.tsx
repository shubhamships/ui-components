import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    className: "text-white bg-blue-500 px-3.5 rounded-3xl text-sm",
    onClick: action("button-clicked"),
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Primary Button");
    await userEvent.click(button);
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    className: "text-white bg-red-500 rounded-lg px-3.5 text-sm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Danger");
    await userEvent.hover(button); // Simulates hover interaction
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    className: "text-blue-500 border border-blue-500 rounded-md px-3.5 text-sm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Secondary");
    await userEvent.hover(button); // Simulates hover interaction
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    className: "text-white bg-green-500 rounded-sm px-3.5 text-sm",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    className: "text-orange-500 rounded-full border border-orange-500 px-3.5 text-sm",
  },
};
export const ExtraSmall: Story = {
  args: {
    children: "XS",
    className: "text-white bg-yellow-500 rounded-3xl px-2 text-xs",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    className: "text-white bg-blue-500 rounded-3xl px-3 text-sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    className: "bg-red-50 border border-red-500 text-red-500 rounded-md px-5 text-md",
  },
};

export const Large: Story = {
  args: {
    children: "Delete",
    className: "text-white bg-black rounded-md px-10 text-lg",
  },
};

export const Full_Width: Story = {
  args: {
    children: "Login",
    className: "bg-blue-500 w-80 text-white rounded-md px-5 text-md",
  },
};

export const Icon_Button: Story = {
  args: {
    children: "❌",
    className: "bg-red-50 border border-red-500 text-red-500 rounded-md px-5 text-md",
  },
};

export const Icon_Text: Story = {
  args: {
    children: "➕ Add",
    className: "bg-gray-50 rounded-full border border-gray-100 px-5 text-md",
  },
};

export const Floating_Button: Story = {
  args: {
    children: "➕",
    className: "bg-gray-50 rounded-full border border-gray-100 px-3 text-md",
  },
};
