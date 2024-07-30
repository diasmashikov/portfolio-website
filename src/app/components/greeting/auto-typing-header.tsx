import { useState } from "react";
import { ReactTyped } from "react-typed";

const AutoTypingHeader: React.FC = () => {
  const [showInitialCursor, setShowInitialCursor] = useState(true);

  return (
    <div className="w-full text-center">
      <style jsx>{`
        .typed-cursor {
          opacity: 1;
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
        {showInitialCursor && <span className="typed-cursor">|</span>}
        <ReactTyped
          strings={[
            "<span class='text-primary-text-color'>Full-Stack</span> <span class='text-blue-500'>Developer</span>",
          ]}
          typeSpeed={60}
          onBegin={() => setShowInitialCursor(false)}
        />
      </h1>
    </div>
  );
};

export default AutoTypingHeader;
