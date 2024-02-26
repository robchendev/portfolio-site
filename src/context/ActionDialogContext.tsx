import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActionDialogContextType {
  actionDialogText: string;
  setActionDialogText: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context with an undefined default value, we will set it in the provider
const ActionDialogContext = createContext<ActionDialogContextType | undefined>(undefined);

interface ActionDialogProviderProps {
  children: ReactNode;
}

// Provider component
export const ActionDialogProvider: React.FC<ActionDialogProviderProps> = ({ children }) => {
  const [actionDialogText, setActionDialogText] = useState(
    "Currently, this portfolio is under development."
  );

  return (
    <ActionDialogContext.Provider value={{ actionDialogText, setActionDialogText }}>
      {children}
    </ActionDialogContext.Provider>
  );
};

// Custom hook to use the context
export const useActionDialog = () => {
  const context = useContext(ActionDialogContext);
  if (context === undefined) {
    throw new Error("useActionDialog must be used within a ActionDialogProvider");
  }
  return context;
};
