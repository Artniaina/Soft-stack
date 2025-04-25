import { usePlannerContext } from "../context/usePlannerContext";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import OverView from "../features/OverView";
import TaskList from "../features/Task/TaskList";
import Pomodoro from "../features/Pomodoro";
import Planning from "../features/Planning";
import ToDoList from "../features/ToDoList";
import Note from "../features/Notes/Note";

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
    <div className="flex overflow-hidden max-h-[100vh]">
        <SideBar />
      <main className="flex-1 flex flex-col">
        <header >
          <TopBar />
        </header>
        <section className="flex-1 overflow-auto p-4">
          {RenderedComponent}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
