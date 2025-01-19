import React, { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn"); // Example state

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "bn" : "en"));
  };

  return (
    <AppContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
