import { motion } from "framer-motion";
import { sidebarData } from "../data/SidebarData";
import { useState } from "react";
import logo from "../assets/sidebar/logo.svg";
import avatar from "../assets/sidebar/avatar.svg";
const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <motion.div
        animate={{
          width: isOpen ? "240px" : "80px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 12,
          },
        }}
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
                <div className={`flex items-center gap-4 overflow-hidden `}>
                  <motion.img
                    animate={{
                      width: isOpen ? "30px" : "50px",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    src={i.src}
                    alt={i.src}
                    className={`w-6 overflow-hidden  justify-self-center ${
                      index < 2 && "imageColor"
                    }     `}
                  />

                  <motion.p
                    variants={{
                      hidden: { opacity: 0},
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    transition={{ delay:0.2,duration:0.5  }}
                    className={`  
        ${index === 0 ? "font-semibold" : "font-normal"} text-lg  
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
                animate={{ width: !isOpen && "25px" }}
                key={i.src}
                src={i.src}
                alt={i.src}
              />
            ))}
          </div>
        )}
        <div className="flex flex-col items-center gap-5  mx-auto">
          <div className="flex items-center gap-4 h-[50vh]">
            <img src={avatar} alt="" className="mt-auto" />
            {isOpen && (
              <div className="mt-auto">
                <motion.p className="font-semibold"  variants={{
                      hidden: { opacity: 0},
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    transition={{ delay:0.2,duration:0.5  }}>Moni Roy</motion.p>
                <motion.p className="text-[#979797]"  variants={{
                      hidden: { opacity: 0},
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    transition={{ delay:0.2,duration:0.5  }}>Beginner</motion.p>
              </div>
            )}
          </div>
          {isOpen && <motion.p  variants={{
                      hidden: { opacity: 0},
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    transition={{ delay:0.2,duration:0.5  }} className="text-[#424242]">Street Suite 2.0</motion.p>}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedSidebar;
