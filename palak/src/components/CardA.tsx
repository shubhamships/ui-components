interface ImageProps {
  image: string;
}
const CardA = ({ image }: ImageProps) => {
  return (
    <div className="h-44">
      <img src={image} className="h-full w-full rounded-md object-cover" />
    </div>
  );
};

export default CardA;
