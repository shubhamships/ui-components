interface CardTextProps {
  // text: string;
  className?: string;
  // description?: string;
  array: any[];
}

const CardText = ({ className, array }: CardTextProps) => {
  return (
    <div>
      {array &&
        array.map(({ text, description }) => {
          return (
            <div
              className={`w-full rounded-md flex flex-col h-56 border-2 border-red-900 ${className} md:h-80 items-center justify-center`}
            >
              <p className="text-sm font-semibold text-center">{text}</p>
              <p className="text-sm text-center px-4">{description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CardText;
