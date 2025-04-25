import { useState } from "react";
import Background from "../assets/pink.png";

const Note = () => {
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

  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleAddNote = () => {
    if (newNote.title.trim() === "" || newNote.content.trim() === "") return;

    setNotes([
      ...notes,
      {
        id: Date.now(),
        title: newNote.title,
        content: newNote.content,
      },
    ]);

    setNewNote({ title: "", content: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-pastel-purple text-white rounded-lg shadow-pastel hover:shadow-pastel-hover transition-all"
        >
          {showForm ? "Cancel" : "Add Note"}
        </button>
      </div>

      <div className="flex flex-wrap ">
        {notes.map((note) => (
            <div
            key={note.id}
            className="relative h-[23rem] gap-4 justify-center w-[25rem] overflow-hidden bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${Background})`,
              transform: `rotate(${note.id % 11 - 5}deg)`,
        
              scale: `${0.9 + (note.id % 3) * 0.1}`            }}
            >
            <div className="absolute h-[16rem] rounded-lg w-[17rem] top-[3.2rem] left-[5rem] inset-0 bg-white bg-opacity-60 p-4 flex flex-col text-left justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {note.title}
              </h2>
              <p className="text-gray-600">{note.content}</p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
