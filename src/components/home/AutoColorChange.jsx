import React, { useState, useEffect } from "react";

const AutoColorChange = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundClass = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ][index];

  return (
    <div
      className={`h-screen flex items-center justify-center ${backgroundClass}`}
    >
    </div>
  );
};

export default AutoColorChange;
