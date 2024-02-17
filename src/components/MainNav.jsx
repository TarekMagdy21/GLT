import notification from "../assets/main/notification.svg";
import searchIcon from "../assets/main/search.svg";
const MainNav = () => {
  return (
    <div className="flex items-center w-full px-10 pb-4">
      <p className="font-bold text-5xl flex relative">
        <span className="before:absolute before:content-'' before:border-[#53ACFF]  before:border-[2.9px]  before:h-full before:bg-black before:rounded-lg before:left-0 before:-translate-x-2"></span>
        ALERTS
      </p>
      <div className="flex items-center gap-2 flex-grow">
        <div className="relative flex-grow mr-2">
          <input
            type="search"
            placeholder="Search By..."
            className="bg-[#313131] placeholder:text-white p-[0.65rem] pl-[1rem] pr-[2rem] rounded-lg border-none ml-2 w-full"
          />
          <img
            onClick={() => console.log(`Searching...`)}
            src={searchIcon}
            alt="Search"
            className="cursor-pointer absolute right-[9px] top-[50%] transform -translate-y-1/2 fill-current text-white  "
            width="24"
            height="24"
          />
        </div>
        <div className="relative">
          <img src={notification} alt="notification" />
          <div className="bg-[#118F4B] px-[0.45rem] rounded-full absolute -top-3 -right-[0.4rem]">
            <span className="text-sm">6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
