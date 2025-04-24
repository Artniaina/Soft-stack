import { createContext, useState } from "react";
import { useContext } from "react";


interface PlannerContextType {
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

interface PlannerContextProps{
 children: React.ReactNode;
}
const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

 export const usePlannerContext = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error("usePlannerContext must be used within a PlannerProvider");
  }
  return context;
};

export const PlannerProvider: React.FC<PlannerContextProps> = ({ children }) => {
  const [link, setLink] = useState('Overview');
  // console.log("PlannerContext", link);

  return (
    <PlannerContext.Provider value={{ link, setLink }}>
      {children}
    </PlannerContext.Provider>
  );
};
export default PlannerContext;
