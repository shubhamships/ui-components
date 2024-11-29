import CardText from "../components/CardText";
import Analysis from "../components/Analysis";
const ProjectOverview = ({ overviewArray, taskArray, competitiveAnalysisData }: any) => {
  return (
    <div className="mt-24">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        Project Overview
      </p>
      <CardText array={taskArray} className="h-24 mt-7 md:h-20 flex-col" />
      <Analysis data={competitiveAnalysisData} />
      <div className="grid grid-cols-1 mt-7">
        <CardText array={overviewArray} className="h-24 mt-7 md:h-20 flex-col" />
      </div>
    </div>
  );
};

export default ProjectOverview;
