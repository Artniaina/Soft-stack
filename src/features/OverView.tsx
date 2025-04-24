import { Calendar, CheckSquare, BookText, Heart, PenTool, Sparkles } from 'lucide-react';

const Overview = () => {
  const tasks = [
    { id: 1, title: 'Complete project proposal', completed: false, priority: 'high', dueDate: '2023-09-15' },
    { id: 2, title: 'Weekly team meeting', completed: false, priority: 'medium', dueDate: '2023-09-16' },
    { id: 3, title: 'Review documentation', completed: false, priority: 'low', dueDate: '2023-09-18' }
  ];
  
  const notes = [
    { id: 1, content: 'Ideas for new marketing campaign', color: '#fdf4ff', date: '2023-09-14' },
    { id: 2, content: 'Meeting notes from client discussion', color: '#f0f9ff', date: '2023-09-12' }
  ];
  
  const habits = [
    { id: 1, name: 'Morning meditation', completed: true },
    { id: 2, name: 'Daily exercise', completed: true },
    { id: 3, name: 'Read 30 minutes', completed: false }
  ];
  
  const completedTasks = 12;
  const habitProgress = 75;
  const mostRecentMood = '✨';
  
  const setActiveTab = (tab: string) => {
    console.log(`Navigate to ${tab} tab`);
  };
 
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const paperStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fce7f3' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    backgroundColor: '#fffbfe'
  };
  
  const handwrittenStyle = {
    fontFamily: "cursive"
  };

  return (
    <div className="bg-pink-50 rounded-lg p-6 h-full shadow-md" style={paperStyle}>
      <div className="absolute top-0 left-0 w-16 h-4 bg-pink-200 rotate-6 origin-top-left transform -translate-x-2"></div>
      <div className="absolute top-0 right-0 w-16 h-4 bg-purple-200 -rotate-6 origin-top-right transform translate-x-2"></div>
      
      <div className="mb-6 relative">
        <Sparkles className="absolute -top-2 -left-2 text-pink-300" size={16} />
        <h2 className="text-2xl font-bold text-pink-800" style={handwrittenStyle}>
          {getGreeting()}, Kanto!
        </h2>
        <p className="text-pink-600">Here's an overview of your planner stats</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
          <div className="flex items-center mb-2">
            <CheckSquare size={20} className="mr-2 text-pink-500" />
            <h3 className="font-medium text-pink-800" style={handwrittenStyle}>Tasks</h3>
          </div>
          <div className="text-3xl font-bold text-pink-700 mb-1">{tasks.length}</div>
          <div className="w-full bg-pink-100 rounded-full h-2 mb-2">
            <div 
              className="bg-pink-400 h-2 rounded-full" 
              style={{ width: '60%' }}
            ></div>
          </div>
          <p className="text-sm text-pink-600">60% completed</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
          <div className="flex items-center mb-2">
            <BookText size={20} className="mr-2 text-purple-500" />
            <h3 className="font-medium text-purple-800" style={handwrittenStyle}>Notes</h3>
          </div>
          <div className="text-3xl font-bold text-purple-700 mb-1">{notes.length}</div>
          <p className="text-sm text-purple-600">Active notes</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200">
          <div className="flex items-center mb-2">
            <Heart size={20} className="mr-2 text-blue-500" />
            <h3 className="font-medium text-blue-800" style={handwrittenStyle}>Habits</h3>
          </div>
          <div className="text-3xl font-bold text-blue-700 mb-1">{habits.length}</div>
          <div className="w-full bg-blue-100 rounded-full h-2 mb-2">
            <div 
              className="bg-blue-400 h-2 rounded-full" 
              style={{ width: `${habitProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-blue-600">{habitProgress}% progress</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-100" 
             style={{background: "linear-gradient(to bottom, white, #fff1f2)"}}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-pink-800" style={handwrittenStyle}>Upcoming Tasks</h3>
            <PenTool size={16} className="text-pink-400" />
          </div>
          {tasks.filter(t => !t.completed).slice(0, 3).map(task => (
            <div key={task.id} className="mb-2 p-2 bg-white rounded-md shadow-sm border border-pink-100">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                  backgroundColor: task.priority === 'high' ? '#fb7185' : 
                                 task.priority === 'medium' ? '#fda4af' : '#fecdd3'
                }}></div>
                <div className="text-sm text-pink-900">{task.title}</div>
              </div>
              <div className="text-xs text-pink-500 mt-1">
                Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
          <button 
            onClick={() => setActiveTab('tasks')}
            className="w-full text-center text-sm text-pink-600 hover:text-pink-700 mt-2 font-medium"
            style={{...handwrittenStyle, textDecoration: "underline"}}
          >
            View all tasks →
          </button>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-100"
             style={{background: "linear-gradient(to bottom, white, #faf5ff)"}}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-purple-800" style={handwrittenStyle}>Recent Notes</h3>
            <PenTool size={16} className="text-purple-400" />
          </div>
          {notes.slice(0, 2).map(note => (
            <div key={note.id} className="mb-2 p-3 rounded-md shadow-sm border border-purple-100" style={{ backgroundColor: note.color }}>
              <div className="text-sm text-purple-900">{note.content}</div>
              <div className="text-xs text-purple-500 mt-1">
                {new Date(note.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
          <button 
            onClick={() => setActiveTab('notes')}
            className="w-full text-center text-sm text-purple-600 hover:text-purple-700 mt-2 font-medium"
            style={{...handwrittenStyle, textDecoration: "underline"}}
          >
            View all notes →
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 text-gray-800 shadow-md border-2 border-pink-100"
           style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fbcfe8' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundColor: '#fdf2f8'
           }}>
        <div className="flex items-center justify-between relative">
          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-8 h-8">
            <Sparkles className="text-pink-300" size={16} />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8">
            <Sparkles className="text-purple-300" size={16} />
          </div>
          
          <div>
            <h3 className="font-medium mb-1 text-pink-800" style={handwrittenStyle}>Weekly Summary</h3>
            <p className="text-pink-600 text-sm mb-4">You're making great progress!</p>
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <div className="text-lg font-bold text-pink-700">{completedTasks}</div>
                <div className="text-pink-600">Completed</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-700">{habits.length}</div>
                <div className="text-purple-600">Habits</div>
              </div>
              <div>
                <div className="text-lg font-bold">{mostRecentMood}</div>
                <div className="text-blue-600">Mood</div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center shadow-inner border-2 border-pink-200">
              <Calendar size={32} className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-16 h-4 bg-blue-200 -rotate-6 origin-bottom-left transform -translate-x-2"></div>
      <div className="absolute bottom-0 right-0 w-16 h-4 bg-purple-200 rotate-6 origin-bottom-right transform translate-x-2"></div>
    </div>
  );
};

export default Overview;