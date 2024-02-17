import logo from "../assets/sidebar/logo.svg";
import avatar from "../assets/sidebar/avatar.svg";
import { sidebarData } from "../data/SidebarData";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <div className="bg-[#181818] h-screen    pt-5 z-10  ">
      <div className=" h-full flex flex-col justify-between ">
        <div
        // initial={{ x: 300, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ x: -300, opacity: 0 }}
        >
          <img src={logo} alt="" className="mb-12 mx-auto" />
          {sidebarData.map((i, index) => (
            <div
              key={i.src}
              className="group p-1 rounded-lg ps-5 relative mb-3 pr-10  cursor-pointer"
            >
              <div className={`flex items-center gap-2`}>
                <img
                  width={20}
                  height={20}
                  src={i.src}
                  alt={i.src}
                  className={`justify-self-center ${index < 2 && "imageColor"}`}
                />
                <p
                  className={`
                   ${index === 0 ? "font-semibold" : "font-normal"} text-xl
                   ${index < 2 && "group-hover:text-[#53acff]"}
                 `}
                >
                  {i.title}
                </p>
              </div>
              <div
                className={`opacity-0 ${
                  index > 1 && "group-hover:opacity-100 "
                } transition-all duration-500`}
              >
                <div className="inset-0 bg-[#23415e] absolute rounded-lg blur-sm" />
                <div className="inset-0 absolute text-center pt-1 z-20 text-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5  mx-auto">
          <div className="flex items-center gap-4">
            <img src={avatar} alt="" />
            <div>
              <p className="font-semibold">Moni Roy</p>
              <p className="text-[#979797]">Beginner</p>
            </div>
          </div>
          <p className="text-[#424242]">Street Suite 2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
