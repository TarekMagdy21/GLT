import FiltersApplied from "./FiltersUI/FiltersApplied";
import searchIcon from "../assets/main/StockSearch.svg";
import { useAddedFilters } from "../Zustand/AddedFilters";
import IndustryFilters from "./FiltersUI/IndustryFilters";
import {   useState } from "react";
import OptionSelector from "./FiltersUI/OptionSelector";
import TextSelector from "./FiltersUI/TextSelector";
const Filters = () => {
  const strategyOptions = [
    "",
    "Big Option Buys",
    "Merger Arbitrage",
    "Short Reports",
    "",
  ];
  const AssetOptions = ["", "Stocks", "Options", "Futures", ""];
   const [selectedMarketCap, setSelectedMarketCap] = useState("");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("");
  const { setAppliedFilters } = useAddedFilters();

  // use setAppliedFilters in the Apply button in the end
  return (
    <div className="bg-[#181818] p-5  flex flex-col items-center justify-center rounded-lg h-[95.5vh] ">
      <h1 className="font-semibold text-2xl">Filters</h1>
      <FiltersApplied />
      {/* Search */}
      <div className="bg-[#202020] w-full  p-4  rounded flex flex-col gap-2   pb-6">
        <p className="font-bold">Stock</p>
        <div className="relative flex-grow mr-2">
          <input
            type="search"
            placeholder="$ TICKER"
            className="bg-[#313131]  p-[0.3rem] pl-[1rem] pr-[2rem] rounded-lg border-none ml-2 w-full"
          />
          <img
            onClick={() => console.log(`Searching...`)}
            src={searchIcon}
            alt="Search"
            className="cursor-pointer absolute right-[9px] top-[50%] transform -translate-y-1/2      "
            width="24"
            height="24"
          />
        </div>
        <IndustryFilters />
        <div className="grid grid-cols-2 mt-2 ">
          <OptionSelector
            options={["Micro", "Small", "Large"]}
            title={"Market Cap"}
            state={selectedMarketCap}
            setState={setSelectedMarketCap}
          />
          <OptionSelector
            options={["Low Risk", "Mid Risk", "High Risk"]}
            title={"Risk Level"}
            state={selectedRiskLevel}
            setState={setSelectedRiskLevel}
          />
        </div>
        <div className="grid grid-cols-2 mt-2 ">
          <TextSelector title="Strategy" options={strategyOptions} />
          <div>
            <div>
              <TextSelector title="Asset" options={AssetOptions} />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setAppliedFilters();
        }}
        className="mt-5 bg-[#53ACFF] px-16 py-[0.4rem] font-bold rounded-lg text-xl hover:bg-[#547efdcd]"
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;
