import { TiArrowSortedDown } from "react-icons/ti";
import PropTypes from "prop-types";
import { useState } from "react";

const OptionSelector = ({ title, state, setState, options }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage visibility
  return (
    <div className="relative w-[10vw] text-nowrap">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <TiArrowSortedDown
          className={`duration-300 cursor-pointer transform ${isOpen ? "" : "rotate-180 "}`}
        />
        <p className="font-bold">{title}</p>
      </div>
      {isOpen && (
        <div className=" flex flex-col gap-2 ml-6 text-base mt-2 transition-all duration-300 transform translate-y-0">
          {options?.map((item) => (
            <div
              className="grid grid-cols-7 cursor-pointer "
              key={item}
              onClick={() => {
                setState(item);
              }}
            >
              <div
                className={`w-2 h-2  rounded-full ring-[0.35rem] ring-[#494949] mt-2 ${
                  state === item && "bg-[#53acff]"
                }`}
              />
              <p className="text-nowrap w-fit">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

OptionSelector.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default OptionSelector;
