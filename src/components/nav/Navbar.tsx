import React, { ReactElement, useContext, useEffect, useState } from "react";

import { ThemeContext, Themes } from "../../context/ThemeContext";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import { setLocalStorage } from "../../helpers/localStorage";
import useWindowSize, { Size } from "../../helpers/WindowSizeHook";

interface Props {
  handleContactModal: () => void;
}

export default function Navbar({ handleContactModal }: Props): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeName, setThemeName] = useState<string>("light");

  const windowSize: Size = useWindowSize();
  const [onMobile, setOnMobile] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<string>("false");

  useEffect(() => {
    for (var i in Themes) {
      if (Themes[i] === theme) {
        setThemeName(i);
      }
    }
  }, [theme]);

  useEffect(() => {
    setOnMobile(windowSize.width! <= 870);
  }, [windowSize]);

  function handleOpenGithub() {
    window.open("https://github.com/fusunnn", "_blank");
  }

  function handleOpenProjects() {}

  function handleContact() {
    handleContactModal();
  }

  function handleChangeTheme() {
    if (theme === Themes["light"]) {
      setLocalStorage("port-theme", "dark");
      setTheme(Themes["dark"]);
    } else {
      setLocalStorage("port-theme", "light");
      setTheme(Themes["light"]);
    }
  }

  function handleMobileMenu() {
    setMobileMenuOpen((prevState) => !prevState);
    setAnimationKey((prevState) => (prevState === "false" ? "true" : "false"));
  }

  return (
    <>
      {onMobile ? (
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          animationKey={animationKey}
          handleMobileMenu={handleMobileMenu}
          themeName={themeName}
          handleChangeTheme={handleChangeTheme}
          handleOpenGithub={handleOpenGithub}
          handleContact={handleContact}
          handleOpenProjects={handleOpenProjects}
        />
      ) : (
        <DesktopMenu
          themeName={themeName}
          handleChangeTheme={handleChangeTheme}
          handleOpenGithub={handleOpenGithub}
          handleContact={handleContact}
          handleOpenProjects={handleOpenProjects}
        />
      )}
    </>
  );
}
