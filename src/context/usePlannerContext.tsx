import { createContext, useState } from "react";

const PlannerContext = createContext({});
interface PlannerContextType {
  children?: React.ReactNode;
}
export const PlannerProvider: React.FC<PlannerContextType> = ({ children }) => {
  const [link, setLink] = useState("");

  return (
    <PlannerContext.Provider value={{ link, setLink }}>
      {children}
    </PlannerContext.Provider>
  );
};
export default PlannerContext;
