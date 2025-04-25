import { useState } from "react";
import {
  Home,
  ListTodo,
  Calendar,
  Clock,
  FileText,
  Layout,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { usePlannerContext } from "../context/usePlannerContext";
import { CgShapeHalfCircle } from "react-icons/cg";
import { MdOutlineCircle } from "react-icons/md";

const SideBar = () => {
  const { setLink } = usePlannerContext();
  const [activeItem, setActiveItem] = useState("Overview");
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <Layout /> },
    { name: "Task", icon: <ListTodo /> },
    { name: "Planning", icon: <Calendar /> },
    { name: "To-do-list", icon: <ListTodo /> },
    { name: "Note", icon: <FileText /> },
    { name: "Pomodoro", icon: <Clock /> },
  ];

  const handleRouteChange = (itemName: string) => {
    setLink(itemName);
    setActiveItem(itemName);
  };

  const reliurePattern = () => {
    const numberOfPatterns = 35;
    const elements = [];

    for (let i = 0; i < numberOfPatterns; i++) {
      elements.push(
        <div
          key={`reliure-${i}`}
          className="w-3 h-6 bg-pastel-lavender border-r-2 border-pastel-purple rounded-l-full shadow-sm my-1"
        >
          <div className="text-gray-200 rotate-90 relative">
            <CgShapeHalfCircle className=" relative w-[8rem] h-[3.5rem]" />
            <span className="absolute right-[-0.4rem] bottom-[0.3rem] ">
              <MdOutlineCircle />
            </span>
            <span className="text-gray-300 absolute left-[-0.2rem] top-[0.3rem]">
              <MdOutlineCircle />
            </span>
          </div>
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="flex h-[100vh] ">
      <aside
        className={`h-[100vh] bg-pastel-lavender rounded-tr-5xl rounded-br-xl flex flex-col justify-between transition-all duration-300 ${
          isCollapsed ? "min-w-[5rem] w-[5rem]" : "min-w-[16rem] w-[16rem]"
        }`}
      >
        <div className="flex flex-col items-center mt-8 gap-10">
          <div
            className={`mb-4 flex items-center justify-center bg-pastel-purple/20 rounded-full p-4 shadow-md transform transition-all duration-300 `}
          >
            {!isCollapsed && (
              <h1
                className={`font-bro text-4xl font-bold text-white whitespace-nowrap ${
                  isCollapsed ? "scale-100" : "hover:scale-110"
                } `}
              >
                ✿ <span className="text-5xl">Planner</span>
              </h1>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-2  shadow-lg rounded-full shadow relative hover:bg-gray-100 transition-all ${
                isCollapsed
                  ? "bg-white"
                  : "text-white  bg-pastel-lavender left-[0.7rem] hover:text-gray-900  "
              } `}
            >
              {isCollapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>
          </div>
          <nav className="w-full px-2">
            <ul className="flex flex-col gap-3 w-full">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center p-3 rounded-xl text-2xl transition-all duration-300 cursor-pointer ${
                    activeItem === item.name
                      ? "bg-white text-pastel-purple font-bold shadow-md transform translate-x-2"
                      : "text-gray-600 font-extrabold hover:bg-white/50"
                  } ${isHovered === item.name ? "scale-105 " : ""} ${
                    isCollapsed ? "w-12 " : "w-[13rem]"
                  }`}
                  onClick={() => handleRouteChange(item.name)}
                  onMouseEnter={() => setIsHovered(item.name)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div
                    className={`transition-all duration-300 ${
                      activeItem === item.name
                        ? "text-pastel-purple scale-110"
                        : "text-gray-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  {!isCollapsed && (
                    <>
                      <span className="ml-3">{item.name}</span>
                      {activeItem === item.name && (
                        <ChevronRight className="ml-auto text-pastel-purple animate-pulse" />
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mb-4 px-3 flex flex-col items-center w-full gap-4">
          <div
            className={`p-3 bg-white/70  relative  rounded-full shadow-inner 
            transition-all duration-300 hover:bg-white hover:shadow-md flex items-center gap-2 w-full justify-center ${
              isCollapsed ? "w-8" : "w-[7rem]"
            }`}
          >
            <Home className="text-pastel-purple " size={18} />
            {!isCollapsed && <p className="text-gray-700 font-medium ">Home</p>}
          </div>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center">
        {reliurePattern()}
      </div>
    </div>
  );
};

export default SideBar;
