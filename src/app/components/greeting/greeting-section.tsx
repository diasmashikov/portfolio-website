import Button from "../button";
import AutoTypingHeader from "./auto-typing-header";

type GreetingSectionProps = {
  classNameDimensions: string;
};

const GreetingSection: React.FC<GreetingSectionProps> = ({
  classNameDimensions,
}) => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const yOffset = -150;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 1);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${classNameDimensions} px-4 sm:px-6 md:px-8 lg:px-16`}
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <p className="text-secondary-text-color font-semibold pb-4 sm:pb-6 text-sm sm:text-base md:text-lg">
          Hello, I am Dias. A senior year CS student looking for 2025 software
          engineering internship specializing in Full-Stack (Frontend, Backend, and DevOps) Development
        </p>
        <AutoTypingHeader />
        <div className="flex flex-col sm:flex-row justify-center gap-4 p-4 sm:p-8 mt-4">
          <Button
            className="w-full sm:w-auto text-sm sm:text-base bg-secondary-button-color border-secondary-button-color text-secondary-button-text-color hover:bg-secondary-button-color/40"
            onClick={() => handleScroll("contactme")}
          >
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GreetingSection;
