import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";

export const Themes = {
  light: { bg: "#fbf1c7", accent: "#282828" },
  dark: { bg: "#282828", accent: "#fbf1c7" },
};

const ThemeDefault = { theme: Themes["light"], setTheme: () => null };

interface ThemeContextType {
  theme: Object;
  setTheme: Dispatch<SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextType>(ThemeDefault);

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props): ReactElement {
  const [theme, setTheme] = useState(Themes["light"]);

  useEffect(() => {
    const currTheme = getLocalStorage("port-theme");

    if (currTheme) {
      setTheme(Themes[currTheme]);
    } else {
      setLocalStorage("port-theme", "light");
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
