import { FaUser } from "react-icons/fa";

type MetricTitleProps = {
  metricTitle: string;
  value: string;
};

const MetricTitle: React.FC<MetricTitleProps> = ({ metricTitle, value }) => {
  return (
    <div className="bg-white text-indigo-400 font-semibold rounded-xl flex items-center justify-between text-sm">
      <div className="bg-indigo-400 text-white px-2  rounded-l-xl flex items-center gap-2 p-1">
        <FaUser className="size-4" />
        <p>{metricTitle}</p>
      </div>
      <div className="px-2  bg-slate-100 rounded-r-xl p-1 font-bold ">
        {value}
      </div>
    </div>
  );
};

export default MetricTitle;
