import React from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

export const ButtonUi = () => {
  return (
    <>
      <div>
        <Card className="flex justify-center items-center p-4 w-full gap-2">
          <Button title="Submit" onClick={() => alert("Button Clicked !")} />
          <Button title="Button xs" variant="default" size="xs" />
          <Button title="Button sm" variant="default" size="sm" />
          <Button title="Button lg" variant="default" size="lg" />
          <Button title="Button xl" variant="default" size="xl"/>
          <Button title="Button icon" variant="default" size="icon"/>
        </Card>
      </div>
    </>
  );
};
