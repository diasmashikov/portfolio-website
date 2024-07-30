import { FaUser } from "react-icons/fa";

type MetricTitleProps = {
  metricTitle: string;
  value: string;
};

const MetricTitle: React.FC<MetricTitleProps> = ({ metricTitle, value }) => {
  return (
    <div className="bg-white text-indigo-400 font-semibold rounded-xl flex items-center justify-between text-xs sm:text-sm">
      <div className="bg-indigo-400 text-white px-1 sm:px-2 rounded-l-xl flex items-center gap-1 sm:gap-2 py-1">
        <FaUser className="w-3 h-3 sm:w-4 sm:h-4" />
        <p>{metricTitle}</p>
      </div>
      <div className="px-1 sm:px-2 bg-slate-100 rounded-r-xl py-1 font-bold">
        {value}
      </div>
    </div>
  );
};

export default MetricTitle;
