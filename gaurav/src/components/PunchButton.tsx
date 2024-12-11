import Button from "./ui/personal/Button";

export const PunchButton = ({
  disabled,
  onClick,
  title,
}: {
  title: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) => {
  return (
    <Button
      title={title}
      disabled={disabled}
      className={`${
        disabled ? "cursor-not-allowed bg-opacity-60 hover:opacity-60" : "cursor-pointer"
      } w-full sticky-top-20`}
      onClick={onClick}
    />
  );
};
