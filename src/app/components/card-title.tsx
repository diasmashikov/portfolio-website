import { AiFillAmazonCircle, AiFillMedicineBox } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

type CardTitleProps = {
  image_file?: string;
  name: string;
};

const getIconComponent = (name: string) => {
  switch (name) {
    case "Histology Learning Platform":
      return (
        <AiFillMedicineBox className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
      );
    case "Diascodegym":
      return <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />;
    default:
      return (
        <FaMobileScreen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
      );
  }
};

const CardTitle: React.FC<CardTitleProps> = ({ image_file, name }) => {
  const Icon = getIconComponent(name);
  return (
    <div className="flex flex-row gap-2 items-center text-primary-text-color">
      {Icon}
      <h1 className="text-base sm:text-lg font-bold">{name}</h1>
    </div>
  );
};

export default CardTitle;
