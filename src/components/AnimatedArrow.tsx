import React, { useEffect, useState, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import { HiArrowUp } from "react-icons/hi";

const AnimatedArrow = () => {
  const [arrowSize, setArrowSize] = useState(36);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setInterval(() => {
      setArrowSize((prevState) => (prevState === 36 ? 48 : 36));
    }, 800);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-24 w-32 text-center absolute">
      <HiArrowUp
        color={theme["accent"]}
        size={arrowSize}
        style={{ transition: "0.2s" }}
      />
      <p
        className="text-md font-extrabold whitespace-normal mt-2"
        style={{ color: theme["accent"] }}
      >
        Click here to check out my projects!
      </p>
    </div>
  );
};

export default AnimatedArrow;
