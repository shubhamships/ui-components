import CardA from "../components/CardA";
import overview1 from "../assets/overview1.png";
import overview3 from "../assets/overview3.png";
import gif5 from "../assets/gif5.gif";

const BrandOverview = () => {
  const imgArray = [overview1, gif5, overview3];
  const textArray = [
    "​Zura is a music/audio streaming mobile application to create an immersive artistic experience.",
    "Zura mission is give everyone a platform that builds community, promotes creativity and to be an app that can be a musical companion.",
    "Zura’s core value includes: compassion, Innovation, creativity and curiosity - “Live Life Loud”.  ",
  ];

  return (
    <div className="mt-20">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        Brand Overview
      </p>

      <div className="grid grid-cols-2 gap-2 mt-10 md:grid-cols-3 md:gap-7">
        {imgArray && imgArray.map((img) => <CardA image={img} className="h-56 md:h-80" />)}

        {textArray &&
          textArray.map((text) => <CardA text={text} className="border-2 border-red-900 rounded-md h-56 md:h-80" />)}
      </div>
    </div>
  );
};

export default BrandOverview;
