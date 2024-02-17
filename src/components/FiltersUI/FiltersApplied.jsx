import FilterDisplay from "./FilterDisplay";

const FiltersApplied = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <p className="text-[#979797]">Filters Applied</p>
        <button> Clear All</button>
      </div>
      <div className="bg-[#202020] w-full  p-2  rounded flex flex-wrap gap-2   pb-2 mb-3  ">
        <FilterDisplay   />
      </div>
    </>
  );
};

export default FiltersApplied;
