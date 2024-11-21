import React from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import { Mail, Send } from "lucide-react";

export const ButtonUi = () => {
  return (
    <>
      <div>
        <div className="w-full backdrop-blur-lg bg-white/30">
          <h1 className="text-3xl font-bold text-center mt-4 space-y-8">Button Component</h1>
        </div>
        <div>
          <div className="text-sm font-medium">Default Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="secondary">
            <Button title="Button xs" variant="default" size="xs" />
            <Button title="Button sm" variant="default" size="sm" />
            <Button title="Button Default" />
            <Button title="Button lg" variant="default" size="lg" />
            <Button title="Button xl" variant="default" size="xl" />
            <Button title="+" variant="default" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium opacity-75">Secondary Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="secondary">
            <Button title="Button xs" variant="secondary" size="xs" />
            <Button title="Button sm" variant="secondary" size="sm" />
            <Button title="Button Default" variant="secondary" />
            <Button title="Button lg" variant="secondary" size="lg" />
            <Button title="Button xl" variant="secondary" size="xl" />
            <Button title="+" variant="secondary" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium text-destructive">Destructive Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="secondary">
            <Button title="Button xs" variant="destructive" size="xs" />
            <Button title="Button sm" variant="destructive" size="sm" />
            <Button title="Button Default" variant="destructive" />
            <Button title="Button lg" variant="destructive" size="lg" />
            <Button title="Button xl" variant="destructive" size="xl" />
            <Button title="+" variant="destructive" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium text-success">Success Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="success">
            <Button title="Button xs" variant="success" size="xs" />
            <Button title="Button sm" variant="success" size="sm" />
            <Button title="Button Default" variant="success" />
            <Button title="Button lg" variant="success" size="lg" />
            <Button title="Button xl" variant="success" size="xl" />
            <Button title="+" variant="success" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium text-primary">Soft Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="soft">
            <Button title="Button xs" variant="soft" size="xs" />
            <Button title="Button sm" variant="soft" size="sm" />
            <Button title="Button Default" variant="soft" />
            <Button title="Button lg" variant="soft" size="lg" />
            <Button title="Button xl" variant="soft" size="xl" />
            <Button title="+" variant="soft" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium rounded text-primary underline">Link Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="link">
            <Button title="Button xs" variant="link" size="xs" />
            <Button title="Button sm" variant="link" size="sm" />
            <Button title="Button Default" variant="link" />
            <Button title="Button lg" variant="link" size="lg" />
            <Button title="Button xl" variant="link" size="xl" />
            <Button title="+" variant="link" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium  rounded text-gray-600">Ghost Buttons</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="link">
            <Button title="Button xs" variant="ghost" size="xs" />
            <Button title="Button sm" variant="ghost" size="sm" />
            <Button title="Button Default" variant="ghost" />
            <Button title="Button lg" variant="ghost" size="lg" />
            <Button title="Button xl" variant="ghost" size="xl" />
            <Button title="+" variant="ghost" size="icon" />
          </Card>
        </div>
        <div className="pt-6">
          <div className="text-sm font-medium  rounded text-gray-600">Button with icon</div>
          <Card className="flex justify-center items-center p-4 w-full gap-8" variant="link">
            <Button title="mail xs" variant="withIcon" size="xs" iconName={<Mail />} iconSize="xs" />
            <Button title="Send sm" variant="withIcon" size="sm">
              <Send className="h-5 w-5 pr-1" />
            </Button>
            <Button title="Button Default" variant="withIcon" />
            <Button title="Button lg" variant="withIcon" size="lg" />
            <Button title="Button xl" variant="withIcon" size="xl" />
            <Button title="+" variant="withIcon" size="icon" />
          </Card>
        </div>
      </div>
    </>
  );
};
