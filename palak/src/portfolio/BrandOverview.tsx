import CardA from "../components/CardA";

import CardText from "../components/CardText";

interface BrandOverviewProps {
  array: any[];
  textArray: any[];
}

const BrandOverview = ({ array, textArray }: BrandOverviewProps) => {
  return (
    <div className="mt-20" id="brandoverview">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        Brand Overview
      </p>

      <div className="grid grid-cols-2 gap-2 mt-10 md:grid-cols-3 md:gap-7">
        {textArray && array.map((img) => <CardA image={img} className="h-56 md:h-80" />)}

        <CardText array={textArray} />
        <CardText array={textArray} />

        {array && array.map((img) => <CardA image={img} className="h-56 md:h-80" />)}
      </div>
    </div>
  );
};

export default BrandOverview;
