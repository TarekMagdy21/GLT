import PropTypes from "prop-types";

import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useAddedFilters } from "../../Zustand/AddedFilters";

const FilterDisplay = () => {
  const { setSelectedFilters } = useAddedFilters();
  const [data, setData] = useState(["Health Care", "Materials", "Energy"]);
  const filtering = (i) => {
    setData(data.filter((item) => item !== i));
    setSelectedFilters(data.filter((item) => item !== i));
  };
  return (
    <>
      {data.map((i) => (
        <div
          key={i}
          className="flex bg-[#53ACFF] w-fit h-fit rounded items-center justify-center gap-1 p-[0.1rem] pl-1"
        >
          <p className="text-sm text-black">{i}</p>
          <HiMiniXMark
            onClick={() => {
              filtering(i);
            }}
            color="black"
            className="hover:fill-white cursor-pointer"
          />
        </div>
      ))}
    </>
  );
};

export default FilterDisplay;
