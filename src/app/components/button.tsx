type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      type={type}
      className={`${className} rounded-lg font-semibold px-4 py-2 bg-primary-button-color border-primary-button-color text-primary-button-text-color hover:bg-primary-button-color/85 transition duration-300"`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
