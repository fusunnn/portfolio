import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

import AnimatedArrow from "./AnimatedArrow";
import { ThemeContext, Themes } from "../context/ThemeContext";

import { AnimatePresence, motion } from "framer-motion";

import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import { setLocalStorage } from "../helpers/localStorage";

interface Props {
  handleContactModal: () => void;
}

export default function Navbar({ handleContactModal }: Props): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    for (var i in Themes) {
      if (Themes[i] === theme) {
        setThemeName(i);
      }
    }
  }, [theme]);

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

  return (
    <div
      className="absolute right-4 top-4 flex flex-col w-2/5 h-full items-center"
      data-aos="fade-left"
    >
      <div
        className="w-full h-16 bg-black rounded-md flex items-center justify-evenly"
        style={{ backgroundColor: theme["accent"] }}
      >
        <Button
          onClick={() => handleOpenProjects()}
          bgColor={theme["bg"]}
          height={12}
          width={12}
          padding={0}
          _hover={theme["accent"]}
        >
          <AiOutlineLaptop size={20} color={theme["accent"]} />
          {/* <AnimatedArrow /> */}
        </Button>

        <Button
          onClick={() => handleContact()}
          bgColor={theme["bg"]}
          height={12}
          width={12}
          padding={0}
          _hover={theme["accent"]}
        >
          <BiMailSend size={24} color={theme["accent"]} />
        </Button>
        <Button
          onClick={() => handleOpenGithub()}
          bgColor={theme["bg"]}
          height={12}
          width={12}
          padding={0}
          _hover={theme["accent"]}
        >
          <AiOutlineGithub size={24} color={theme["accent"]} />
        </Button>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            style={{ display: "inline-block" }}
            key={themeName}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Button
              onClick={() => handleChangeTheme()}
              bgColor={theme["bg"]}
              height={12}
              width={12}
              padding={0}
              _hover={theme["accent"]}
            >
              {themeName === "light" ? (
                <BsSun size={22} color={theme["accent"]} />
              ) : (
                <MdNightlight size={22} color={theme["accent"]} />
              )}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
