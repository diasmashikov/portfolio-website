import Button from "./button";

type ChipProps = {
  skill: string;
  backgroundColor?: string;
  textColor?: string;
};

// bg-blue-100
// text-blue-400

const Chip: React.FC<ChipProps> = ({
  skill,
  backgroundColor = "bg-primary-background-color",
  textColor = "text-primary-text-color",
}) => {
  return (
    // <button
    //   className={`btn btn-sm rounded-xl ${backgroundColor} ${textColor} border-header-border-color cursor-default hover:${backgroundColor} hover:${textColor} hover:border-transparent`}
    // >
    //   {skill}
    // </button>

    <Button className="px-2 py-1 text-sm">{skill}</Button>
  );
};

export default Chip;
