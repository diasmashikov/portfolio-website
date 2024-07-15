type ChipProps = {
  skill: string;
  backgroundColor?: string;
  textColor?: string;
};

// bg-blue-100
// text-blue-400

const Chip: React.FC<ChipProps> = ({ skill, backgroundColor, textColor }) => {
  return (
    <button
      className={`btn btn-sm rounded-xl ${backgroundColor} ${textColor} cursor-default hover:${backgroundColor} hover:${textColor} hover:border-transparent`}
    >
      {skill}
    </button>
  );
};

export default Chip;
