import CardA from "./CardA";
interface CardProps {
  className: string;
  heading: string;
  subtitle: string;
  imgArray?: any[];
}

const Card = ({ className, heading, subtitle, imgArray = [] }: CardProps) => {
  return (
    <div
      className={`mt-16 rounded-md max-h-screen pb-4 md:pb-2 px-4 w-full md:px-20 cursor-pointer  hover:contrast-75 ${className}`}
    >
      <p className="text-center font-bold text-2xl pt-7 text-white">{heading}</p>
      <p className="text-center text-xs mt-2 text-white mb-5 md:mt-6 md:mb-10">{subtitle}</p>

      <div className="grid grid-cols-2 gap-2 mt-3 ">
        {imgArray &&
          imgArray.map((img) => {
            return <CardA image={img} />;
          })}
      </div>
    </div>
  );
};

export default Card;
