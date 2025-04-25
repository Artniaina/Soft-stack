import { useRef, useState } from "react";
import Background from "../../assets/pink.png";
import { LuFlower } from "react-icons/lu";
import Cute from "../../assets/cuteflowerhover.png";
import NoteDetails from "./NoteDetails";

const Note = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Shopping List",
      content:
        "Milk, eggs, bread, fruits, and vegetables. Don't forget to pick up coffee beans!",
    },
    {
      id: 2,
      title: "Shopping List",
      content:
        "Milk, eggs, bread, fruits, and vegetables. Don't forget to pick up coffee beans!",
    },
    {
      id: 3,
      title: "Meeting Notes",
      content:
        "Discuss the new project timeline and assign tasks to team members. Follow up on last week's action items.",
    },
    {
      id: 4,
      title: "Ideas",
      content:
        "New app feature: dark mode, notification settings, and user profile customization.",
    },
  ]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const focusRef = () => {};

  const handleShowDetails = (note: any) => {
    setSelectedNote(note);
    setShowDetails(true);
  };
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedNote(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-6xl font-nabuya text-center text-pink-500 flex items-center justify-center">
          - My Notes <LuFlower className="text-xl ml-2" />
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-pastel-purple text-white rounded-lg shadow-pastel hover:shadow-pastel-hover transition-all"
        >
          {showForm ? "Cancel" : "Add Note"}
        </button>
      </div>

      <div ref={ref} className="flex w-[80rem] flex-wrap gap-[2.5rem]">
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative h-[23rem] justify-center w-[25rem] overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${Background})`,
              transform: `rotate(${(note.id % 11) - 5}deg)`,
              scale: `${0.9 + (note.id % 3) * 0.1}`,
            }}
          >
            <div className="absolute h-[16rem] rounded-lg w-[17rem] top-[3.2rem] left-[5rem] inset-0 bg-white bg-opacity-60 p-4 flex flex-col text-left justify-center">
              <div className="absolute -top-2 left-8 w-12 h-12  flex items-center justify-center rounded-full shadow-lg shadow-pastel-purple/50">
                <img src={Cute} alt="" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-nabuya text-pink-700 text-4xl">
                {note.title}
              </h2>
              <p className="text-gray-700 font-nabuya text-2xl">
                {note.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showDetails && <NoteDetails onClose={handleCloseDetails} />}
    </div>
  );
};

export default Note;
