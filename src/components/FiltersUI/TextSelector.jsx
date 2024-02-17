import { useEffect, useState, useRef } from "react";

const TextSelector = ({ title, options }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(2);
  const containerRef = useRef(null);
  console.log("containerRef", containerRef.current);
  const handleScroll = (event) => {
    const container = containerRef.current;
    if (!container) return;

    const { deltaY } = event;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    const scrollPos = container.scrollTop;

    // Calculate the new index based on scroll direction
    let newIndex = selectedOptionIndex + (deltaY > 0 ? 1 : -1);

    // Ensure newIndex stays within bounds of the options array
    if (newIndex < 1) {
      newIndex = 1; // Prevent newIndex from becoming negative
    } else if (newIndex > options.length - 2) {
      newIndex = options.length - 2; // Prevent newIndex from exceeding the maximum index
    }

    setSelectedOptionIndex(newIndex);

    // Prevent page scrolling when reaching top or bottom
    if (
      (scrollPos === 0 && deltaY < 0) ||
      (scrollPos === scrollHeight - clientHeight && deltaY > 0)
    ) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listener for scroll on the container
    container.addEventListener("wheel", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [selectedOptionIndex, options]);

  return (
    <div ref={containerRef}>
      <div>
        <div>
          <p className="font-bold ml-6">{title}</p>
        </div>
        <div className="flex flex-col text-center mt-2 overflow-y-scroll h-[9vh] scrollbar-none !scroll-smooth">
          {options
            .slice(selectedOptionIndex - 1, selectedOptionIndex + 2)
            .map((item, index) => (
              <div
                key={item}
                className={`mr-auto ml-4 text-center flex w-32 text-sm my-1 ${
                  index === 1
                    ? "bg-blue-500 p-1 rounded"
                    : index === 0 || index === 2
                    ? `scale-[95%] bg-gradient-to-t ${
                        index === 0
                          ? "from-[#ffffff] to-[#202020]"
                          : "to-[#ffffff] from-[#202020]"
                      } text-transparent bg-clip-text`
                    : ""
                }`}
              >
                <span className=""> {item}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TextSelector;
