import { usePlannerContext } from "../context/usePlannerContext";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import OverView from "../features/OverView";
import TaskList from "../features/TaskList";
import Pomodoro from "../features/Pomodoro";
import Planning from "../features/Planning";
import ToDoList from "../features/ToDoList";
import Note from "../features/Note";

const DashboardLayout: React.FC = () => {
  const { link } = usePlannerContext();

  let RenderedComponent;
  switch (link) {
    case "Overview":
      RenderedComponent = <OverView />;
      break;
    case "Task":
      RenderedComponent = <TaskList />;
      break;
    case "Pomodoro":
      RenderedComponent = <Pomodoro />;
      break;
    case "Planning":
      RenderedComponent = <Planning />;
      break;
    case "Note":
      RenderedComponent = <Note />;
      break;
    case "To-do-list":
      RenderedComponent = <ToDoList />;
      break;
    default:
      RenderedComponent = <OverView />; 
  }

  return (
    <div className="flex overflow-hidden h-screen">
      <aside className="bg-pastel-peach">
        <SideBar />
      </aside>
      <main className="flex-1 flex flex-col bg-pastel-pink">
        <header className="h-[6rem]">
          <TopBar />
        </header>
        <section className="bg-pastel-yellow flex-1 overflow-auto p-4">
          {RenderedComponent}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
