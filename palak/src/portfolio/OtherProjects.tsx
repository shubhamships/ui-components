import { Link } from "react-router-dom";
import CardA from "../components/CardA";
interface OtherProjectsProps {
  array: any[];
}
const OtherProjects = ({ array }: OtherProjectsProps) => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-600 pt-20 md:pt-28 border-b-2 border-purple-900">
        OTHER PROJECTS
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-10 cursor-pointer md:pb-32 relative">
        {array &&
          array.map(({ image, link }) => {
            return (
              <Link to={link}>
                <div className="">
                  <CardA image={image} className="md:h-72 mt-10 h-48 hover:contrast-75" />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default OtherProjects;
