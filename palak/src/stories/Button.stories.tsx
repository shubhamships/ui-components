import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "text-white bg-blue-500 rounded-md",
    onClick: action("button-clicked"),

    // disabled: true,
  },
  // It gives you access to the canvasElement, which is the DOM element containing the rendered component.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Primary Button");
    await userEvent.click(button);
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    className: "text-white bg-red-500 rounded-md",
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
    className: "text-blue-500 border border-blue-500 rounded-md",
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
    className: "text-white bg-green-500 rounded-md",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    className: "text-orange-500 rounded-full border border-orange-500",
  },
};
