import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActionMenuDisabledContextType {
  actionMenuDisabled: boolean;
  setActionMenuDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with an undefined default value, we will set it in the provider
const ActionMenuDisabledContext = createContext<ActionMenuDisabledContextType | undefined>(
  undefined
);

interface ActionMenuDisabledProviderProps {
  children: ReactNode;
}

// Provider component
export const ActionMenuDisabledProvider: React.FC<ActionMenuDisabledProviderProps> = ({
  children,
}) => {
  const [actionMenuDisabled, setActionMenuDisabled] = useState(false);
  return (
    <ActionMenuDisabledContext.Provider value={{ actionMenuDisabled, setActionMenuDisabled }}>
      {children}
    </ActionMenuDisabledContext.Provider>
  );
};

// Custom hook to use the context
export const useActionMenuDisabled = () => {
  const context = useContext(ActionMenuDisabledContext);
  if (context === undefined) {
    throw new Error("useActionMenuDisabled must be used within a ActionMenuDisabledProvider");
  }
  return context;
};
