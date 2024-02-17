import Sidebar from "../Sidebar";
import MainNav from "../MainNav";
import Table from "../Table";
import Filters from "../Filters";
import AnimatedSidebar from "../AnimatedSidebar";
const Main = () => {
  return (
    <div className="flex items-start justify-between  h-screen bg-[#202020] text-white font-poppins">
      <AnimatedSidebar />
      <div className="flex flex-col  w-full pt-8 ml-2 ">
        <MainNav />
        <Table />
      </div>
      <div className="w-[40%] p-5">
        <Filters />
      </div>
    </div>
  );
};

export default Main;
