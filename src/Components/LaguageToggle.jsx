import React, { useContext } from "react";
import { AppContext } from "../Context/LangContext";


const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(AppContext);

  return (
    <div>
      <p>Current Language: {language === "en" ? "English" : "বাংলা"}</p>
      <button
        onClick={toggleLanguage}
        className="bg-green-700 text-white py-1 px-3 rounded-md hover:bg-green-800"
      >
        {language === "en" ? "Switch to Bangla" : "Switch to English"}
      </button>
    </div>
  );
};

export default LanguageToggle;
