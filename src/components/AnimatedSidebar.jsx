import { motion } from "framer-motion";
import { sidebarData } from "../data/SidebarData";
import { useState } from "react";
import logo from "../assets/sidebar/logo.svg";
import avatar from "../assets/sidebar/avatar.svg";
const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Manga", isOpen);
  const navAnimation = {
    hidden: {
      width: 0,
      padding: 0,
    },
    show: {
      width: "200px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div
      className="main-container"
      onMouseEnter={() => {
        console.log("Manga");
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        console.log("Manga2");
        setIsOpen(false);
      }}
    >
      <motion.div
        animate={{ width: isOpen ? "240px" : "100px" }}
        className="bg-[#181818] h-screen   pt-6 px-1"
        transition={{ duration: 0.2 }} // Add this line
      >
        <img src={logo} alt="" className="mb-12 mx-auto" />
        {isOpen && (
          <div>
            {sidebarData.map((i, index) => (
              <div
                key={i.src}
                className="group p-1 rounded-lg ps-5 relative mb-3 pr-10 cursor-pointer"
              >
                <div className={`flex items-center gap-4`}>
                  <motion.img
                    animate={{ width: isOpen ? "30px" : "50px" }}
                    src={i.src}
                    alt={i.src}
                    className={`w-6  justify-self-center ${
                      index < 2 && "imageColor"
                    }     `}
                  />

                  <motion.p
                    initial={false}
                    animate={{
                      width: isOpen ? "240px" : "100px",
                      opacity: isOpen ? "100" : "0",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={`
            ${index === 0 ? "font-semibold" : "font-normal"} text-xl  
            ${index < 2 && "group-hover:text-[#53acff]"}
          `}
                  >
                    {i.title}
                  </motion.p>
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
        )}
        {!isOpen && (
          <div className="flex flex-col items-center justify-center gap-10">
            {sidebarData.map((i) => (
              <motion.img
                animate={{ width: !isOpen && "35px" }}
                key={i.src}
                src={i.src}
                alt={i.src}
                className={` w-7`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedSidebar;
