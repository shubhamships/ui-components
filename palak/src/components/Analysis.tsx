interface AnalysisItem {
  title: string;
  strengths: string[];
  weaknesses: string[];
  image: string;
}

interface AnalysisProps {
  data: AnalysisItem[];
}

const Analysis = ({ data }: AnalysisProps) => {
  return (
    <div className="min-h-screen border-2 border-red-900 pt-5 px-5 mt-8">
      <div className="border-2 border-red-900 text-center p-5 font-semibold text-xl">COMPETITIVE ANALYSIS</div>
      {data.map((item, index) => (
        <div key={index} className="border-2 border-red-900 rounded-md p-4 my-4">
          <div className="flex items-center justify-center mb-3">
            <img src={item.image} alt={item.title} className="w-14 h-14 object-contain mr-4" />
            <h2 className="uppercase font-semibold text-xl">{item.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm mb-2 text-gray-900 font-semibold">Strengths</h3>
              <ul className="list-disc list-inside text-sm text-gray-900">
                {item.strengths.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-900 font-semibold">Weaknesses</h3>
              <ul className="list-disc list-inside text-sm text-gray-900">
                {item.weaknesses.map((weakness, i) => (
                  <li key={i}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
