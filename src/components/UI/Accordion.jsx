import PropTypes from "prop-types";
import { useState } from "react";
import currency from "../../assets/main/currency.svg";
import high from "../../assets/main/high.svg";
import low from "../../assets/main/low.svg";
import notes from "../../assets/main/notes.svg";
import percentage from "../../assets/main/percentage.svg";

const Accordion = ({
  title,
  description,
  risk,
  percentageNumber,
  notesNumber,
}) => {
  const [active, IsActive] = useState(false);
  return (
    <div className="">
      <div
        className={`p-5 bg-[#313131] cursor-pointer ${
          active ? "rounded-lg rounded-b-none bg-[#53ACFF]" : "rounded-lg"
        }`}
      >
        <div
          className="grid grid-cols-4 place-items-center "
          onClick={() => {
            IsActive((prevState) => !prevState);
          }}
        >
          <div
            className={` flex items-center justify-center gap-8 w-full border-r  ${
              active ? "border-white" : "border-[#414040]"
            }`}
          >
            <img src={currency} alt="" /> {title}
          </div>
          <div
            className={` flex items-center justify-center gap-8 w-full border-r   ${
              active ? "border-white" : "border-[#414040]"
            }`}
          >
            <img src={notes} alt="" />
            {notesNumber}
          </div>
          <div
            className={` flex items-center justify-center gap-8 w-full border-r border-[#414040] ${
              risk == "low" ? "text-[#118F4B]" : "text-[#D94111]"
            }
            ${active && "font-semibold border-white"}
            `}
          >
            <img src={percentage} alt="" />{" "}
            {risk == "low" ? (
              <>+ {percentageNumber} %</>
            ) : (
              <>- {percentageNumber} %</>
            )}
          </div>
          <div className="flex items-center justify-center gap-8 w-full">
            {risk == "low" ? (
              <>
                <img src={low} alt="" /> Low Risk
              </>
            ) : (
              <>
                <img src={high} alt="" /> High Risk
              </>
            )}
          </div>
        </div>
      </div>
      {active && (
        <div className="bg-black p-5 rounded-lg rounded-t-none">
          {description}
        </div>
      )}
    </div>
  );
};
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  risk: PropTypes.string.isRequired,
  percentageNumber: PropTypes.string.isRequired,
  notesNumber: PropTypes.string.isRequired,
};
export default Accordion;
