interface CardAProps {
  image?: string;
  text?: string;
  className?: string;
}

const CardA = ({ image, text, className }: CardAProps) => {
  return (
    <div className={`h-44 ${className}`}>
      {image && <img src={image} className="h-full w-full rounded-md object-cover" />}
      {text && <p className="text-sm text-center px-3 py-16 md:py-28">{text}</p>}
    </div>
  );
};

export default CardA;
