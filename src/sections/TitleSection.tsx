import React, { ReactElement, useEffect, useState, useContext } from "react";

import useWindowSize from "../helpers/WindowSizeHook";

import { ThemeContext } from "../context/ThemeContext";

interface Props {}

export default function TitleSection({}: Props): ReactElement {
  const windowSize = useWindowSize();

  const { theme } = useContext(ThemeContext);

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="title-container" data-aos="fade-up">
        <p
          className={`${
            windowSize.width! <= 630
              ? windowSize.width! <= 470
                ? "text-7xl"
                : "text-8xl"
              : "text-9xl"
          } font-bold mx-4`}
          style={{ color: theme["accent"] }}
        >
          Ivan
        </p>
        <p
          className={`${
            windowSize.width! <= 630
              ? windowSize.width! <= 470
                ? "text-7xl"
                : "text-8xl"
              : "text-9xl"
          } font-bold mx-4`}
          style={{ color: theme["accent"] }}
        >
          Audouard
        </p>
      </div>
    </div>
  );
}
