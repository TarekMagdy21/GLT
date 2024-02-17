import Accordion from "./UI/Accordion";
const Table = () => {
  const AccordionData = [
    {
      title: "AAQQW",
      description: "This is an object used for various purposes.",
      notesNumber: "12",
      percentageNumber: "12",
      risk: "low",
    },
    {
      title: "DSSAD",
      description: "A common household item found in many places.",
      notesNumber: "7",
      percentageNumber: "25",
      risk: "low",
    },
    {
      title: "FIUOP",
      description: "A tool often used in construction and repairs.",
      notesNumber: "9",
      percentageNumber: "18",
      risk: "high",
    },
    {
      title: "ZZMNB",
      description: "An everyday essential for keeping feet warm.",
      notesNumber: "4",
      percentageNumber: "8",
      risk: "low",
    },
    {
      title: "RTYUI",
      description: "Used to depict geographical features of the Earth.",
      notesNumber: "11",
      percentageNumber: "15",
      risk: "low",
    },
    {
      title: "PLKJH",
      description: "A device used to measure and display time.",
      notesNumber: "8",
      percentageNumber: "20",
      risk: "high",
    },
    {
      title: "VBNMC",
      description: "An item worn on the feet for protection and comfort.",
      notesNumber: "6",
      percentageNumber: "10",
      risk: "low",
    },
    {
      title: "LKHGF",
      description: "A flat dish on which food is served or eaten.",
      notesNumber: "10",
      percentageNumber: "10",
      risk: "low",
    },
    {
      title: "POIUY",
      description:
        "Collections of written, printed, or blank sheets bound together.",
      notesNumber: "15",
      percentageNumber: "30",
      risk: "low",
    },
    {
      title: "NMBVC",
      description: "A container used for drinking beverages.",
      notesNumber: "5",
      percentageNumber: "5",
      risk: "high",
    },
    {
      title: "VBNMC",
      description: "An item worn on the feet for protection and comfort.",
      notesNumber: "6",
      percentageNumber: "10",
      risk: "low",
    },
    {
      title: "LKHGF",
      description: "A flat dish on which food is served or eaten.",
      notesNumber: "10",
      percentageNumber: "10",
      risk: "low",
    },
    {
      title: "POIUY",
      description:
        "Collections of written, printed, or blank sheets bound together.",
      notesNumber: "15",
      percentageNumber: "30",
      risk: "low",
    },
    {
      title: "NMBVC",
      description: "A container used for drinking beverages.",
      notesNumber: "5",
      percentageNumber: "5",
      risk: "high",
    },
  ];

  return (
    <div className="p-5 overflow-y-scroll h-[85vh] flex flex-col gap-4    scrollbar-thin    ">
      {AccordionData.map((item, index) => (
        <Accordion
          title={item.title}
          description={item.description}
          risk={item.risk}
          notesNumber={item.notesNumber}
          percentageNumber={item.percentageNumber}
          key={`${item.title}+ ${index}`}
        />
      ))}
    </div>
  );
};

export default Table;
