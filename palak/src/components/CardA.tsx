interface CardAProps {
  image?: string;
  text?: string;
  className?: string;
}

const CardA = ({ image, className }: CardAProps) => {
  return (
    <div className={`h-44 ${className} relative`}>
      <img src={image} className="h-full w-full rounded-md object-cover" />
    </div>
  );
};

export default CardA;
