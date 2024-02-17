import { TiArrowSortedDown } from "react-icons/ti";
import { industryData } from "../../data/IndustryData";
import { useAddedFilters } from "../../Zustand/AddedFilters";
import { useState } from "react";
const IndustryFilters = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage visibility
  const { selectedFilters, setSelectedFilters } = useAddedFilters();
  const filterHandler = (i) => {
    // Check if the item (i) is already in selectedFilters
    const index = selectedFilters.indexOf(i);
    if (index === -1) {
      // If the item is not in selectedFilters, add it
      setSelectedFilters([...selectedFilters, i]);
    } else {
      // If the item is already in selectedFilters, remove it
      const updatedFilters = selectedFilters.filter((item) => item !== i);
      setSelectedFilters(updatedFilters);
    }
  };
  return (
    <>
      {/* Industry Accordion */}
      <div className="mt-3 flex flex-col items-center  gap-2">
        <div
          className="flex items-center w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiArrowSortedDown
            className={`duration-300 cursor-pointer transform ${
              isOpen ? "" : "rotate-180 "
            }`}
          />{" "}
          <p className="font-bold">Industry</p>
        </div>
        {isOpen && (
          <div className="w-full flex  gap-4 ">
            <div>
              {industryData.map((item, index) => (
                <div
                  onClick={() => {
                    filterHandler(item.title);
                  }}
                  key={item.title}
                  className={`   border-l pl-2  py-[0.4rem] cursor-pointer  ${
                    index > 5 && "hidden"
                  }
             
              
              `}
                >
                  <div
                    className={`group flex items-center gap-2 text-nowrap  w-fit hover:bg-[#53ACFF] hover:text-black rounded-lg px-2 duration-300 ease-in-out  ${
                      selectedFilters.indexOf(item.title) !== -1 &&
                      "bg-[#53ACFF] text-black"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className={`group-hover:invert duration-300  ${
                        selectedFilters.indexOf(item.title) !== -1 && "invert "
                      }`}
                    />
                    <span className="   ">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {industryData.map((item, index) => (
                <div
                  onClick={() => {
                    filterHandler(item.title);
                  }}
                  key={item.title}
                  className={`   border-l pl-2  py-[0.4rem] cursor-pointer  ${
                    index < 6 && "hidden"
                  }`}
                >
                  <div
                    className={`group flex items-center gap-2 text-nowrap  w-fit hover:bg-[#53ACFF] hover:text-black rounded-lg px-2 duration-300 ease-in-out  ${
                      selectedFilters.indexOf(item.title) !== -1 &&
                      "bg-[#53ACFF] text-black"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className={`group-hover:invert duration-300  ${
                        selectedFilters.indexOf(item.title) !== -1 && "invert "
                      }`}
                    />
                    <span className="">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IndustryFilters;
