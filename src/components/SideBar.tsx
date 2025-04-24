import { useState } from 'react';
import { Home, ListTodo, Calendar, Clock, FileText, Layout, ChevronRight } from 'lucide-react';
import { usePlannerContext } from '../context/usePlannerContext';

const SideBar = () => {
  const { setLink } = usePlannerContext();
  const [activeItem, setActiveItem] = useState('Overview');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const menuItems = [
    { name: 'Overview', icon: <Layout /> },
    { name: 'Task', icon: <ListTodo /> },
    { name: 'Planning', icon: <Calendar /> },
    { name: 'To-do-list', icon: <ListTodo /> },
    { name: 'Note', icon: <FileText /> },
    { name: 'Pomodoro', icon: <Clock /> },
  ];

const handleRouteChange = (itemName: string) => {
    setLink(itemName);  
    setActiveItem(itemName)
}

  return (
    <div className="min-w-[16rem] h-screen rounded-tr-5xl rounded-br-2xl flex justify-between flex-col items-center bg-pastel-lavender ">
      <div className="flex flex-col w-full items-center mt-8 gap-10">
        <div className="flex items-center justify-center bg-white rounded-full p-4 shadow-md transform transition-all duration-300 hover:scale-110">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-lavender bg-clip-text text-transparent">
          ✿ PlanApp ✿
          </h1>
        </div>
        <nav className="w-full px-4">
          <ul className="flex flex-col gap-5 w-[90%]">
            {menuItems.map((item) => (
              <li 
                key={item.name}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer
                  ${activeItem === item.name ? 
                    'bg-white text-pastel-purple font-bold shadow-md transform translate-x-2' : 
                    'text-gray-600 font-extrabold  hover:bg-white/50'
                  }
                  ${isHovered === item.name ? 'scale-105 ' : ''}
                `}
                onClick={() => handleRouteChange(item.name)}
                onMouseEnter={() => setIsHovered(item.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className={`transition-all duration-300 ${activeItem === item.name ? 'text-pastel-purple scale-110' : 'text-gray-600'}`}>
                  {item.icon}
                </div>
                <span>{item.name}</span>
                {activeItem === item.name && (
                  <ChevronRight className="ml-auto text-pastel-purple animate-pulse" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
  
      <div className="mb-8 p-3 bg-white/70 rounded-full shadow-inner transition-all duration-300 hover:bg-white hover:shadow-md flex items-center gap-2">
        <Home className="text-pastel-purple" size={18} />
        <p className="text-gray-700 font-medium">Homepage</p>
      </div>
    </div>
  );
};

export default SideBar;