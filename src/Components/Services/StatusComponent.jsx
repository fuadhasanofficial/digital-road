import React, { useEffect, useState } from "react";
import errorSound from "../../assets/sound/error.mp3";
import successSound from "../../assets/sound/success.mp3";

const StatusComponent = ({ carData }) => {
  const [status, setStatus] = useState(null); // "success" or "error"

  const playSound = (type) => {
    const audio = new Audio(type === "success" ? successSound : errorSound);
    audio.play();
  };

  useEffect(() => {
    if (carData.complain.length > 0) {
      setStatus(false);
      playSound("error");
    } else {
      playSound("success");
      setStatus(true);
    }
  }, [carData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Status Component</h1>

      <div className="flex gap-4 mb-6"></div>

      {status ? "OK" : "NO"}
    </div>
  );
};

export default StatusComponent;
