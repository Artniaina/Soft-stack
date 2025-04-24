import { useState, useEffect } from "react";

const Homepage = () => {
  const [showSparkle, setShowSparkle] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSparkle(true);
      setTimeout(() => setShowSparkle(false), 2000);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pastel-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pastel-pink opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pastel-lavender opacity-20 animate-pulse-soft"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-pastel-mint opacity-20 animate-float"></div>
      
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-pastel max-w-md w-full relative z-10 animate-float">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-1 bg-pastel-purple rounded-full"></div>
          <div className="px-4 text-3xl">✿</div>
          <div className="w-12 h-1 bg-pastel-purple rounded-full"></div>
        </div>
        
        <h1 className="text-3xl font-cookie text-center text-pastel-purple mb-6">
          My Personal Planner
        </h1>
        
        <div className="relative">
          {showSparkle && (
            <div className="absolute -top-4 -right-4 text-2xl animate-sparkle">✨</div>
          )}
          <p className="text-2xl font-nabuya text-pastel-purple text-center mb-4">
            Welcome to Soft-stack!
          </p>
        </div>
        
        <div className="space-y-3 mb-8">
          <p className="text-lg font-cute text-pastel-lavender text-center">
            Here you can manage your tasks, notes, and more.
          </p>
          <p className="text-lg font-cute text-pastel-lavender text-center">
            To get started please create an account.
          </p>
          <p className="text-lg font-cute text-pastel-lavender text-center">
            If you already have an account, please log in.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4 mt-6">
          <button className="bg-pastel-pink hover:bg-pink-300 text-white font-cute py-3 px-6 rounded-xl shadow-pastel hover:shadow-pastel-hover transition-all duration-300 transform hover:-translate-y-1">
            Create an account
          </button>
          
          <button className="bg-pastel-purple hover:bg-purple-300 text-white font-cute py-3 px-6 rounded-xl shadow-pastel hover:shadow-pastel-hover transition-all duration-300 transform hover:-translate-y-1">
            Login
          </button>
        </div>
        
        <div className="flex items-center justify-center mt-8">
          <div className="w-8 h-1 bg-pastel-peach rounded-full"></div>
          <div className="px-2 text-xl">♡</div>
          <div className="w-8 h-1 bg-pastel-peach rounded-full"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;