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
        const yOffset = -150; // Adjust this value to the desired offset
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 1);
    }
  };

  const handleDownload = () => {
    // The resume.pdf should be placed in the public folder
    const link = document.createElement("a");
    link.href = "/Dias_Mashikov_Resume.pdf";
    link.download = "Dias_Mashikov_Resume.pdf"; // You can change the download filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={`flex flex-col items-center justify-center ${classNameDimensions} `}
    >
      <p className="text-gray-600 font-semibold pb-6">
        Hello, I am Dias. A senior year CS student looking for 2024-2025
        software engineering internship
      </p>
      <AutoTypingHeader />
      <div className="flex flex-row gap-4 p-8">
        <button className="btn bg-gray-800 text-white" onClick={handleDownload}>
          Download CV
        </button>
        <button
          className="btn bg-gray-200 text-black"
          onClick={() => handleScroll("contactme")}
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default GreetingSection;
