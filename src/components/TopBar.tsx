import { useState } from 'react';
import { Bell, Search, User, LogOut, Heart, Sparkles } from 'lucide-react';

const TopBar = () => {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex justify-between h-[5rem] items-center bg-pastel-lavender p-4 shadow-lg shadow-red/20 font-cute">
      <div className="flex items-center gap-2">
        <Heart size={32} className="text-white animate-sparkle" />
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-white tracking-wide font-bro">Personal Planner</h2>
          <h3 className="text-2xl font-cookie text-white opacity-80">
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(today)} • {hour.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="placeholder-cookie pl-8 pr-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple transition-all placeholder:text-pastel-purple/60"
          />
          <Search 
            size={16} 
            className="absolute left-2 top-3 text-pastel-purple" 
          />
        </div>

        {/* Notification button */}
        <button className="p-2 bg-white/70 rounded-xl hover:bg-white transition-all text-pastel-purple hover:scale-105">
          <Bell size={20} />
        </button>

        {/* Profile button */}
        <button className="p-2 bg-white/70 rounded-xl hover:bg-white transition-all text-pastel-purple hover:scale-105">
          <User size={20} />
        </button>

        {/* Logout button */}
        <button className="p-2 bg-white/70 rounded-xl hover:bg-white transition-all text-pastel-purple hover:scale-105">
          <LogOut size={20} />
        </button>

        {/* Decorative element */}
        <Sparkles size={20} className="text-white animate-sparkle" />
      </div>
    </div>
  );
};

export default TopBar;