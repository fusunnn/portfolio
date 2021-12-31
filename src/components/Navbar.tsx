import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

import AnimatedArrow from "./AnimatedArrow";
import { ThemeContext, Themes } from "../context/ThemeContext";

import { AnimatePresence, motion } from "framer-motion";

import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdNightlight, MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { setLocalStorage } from "../helpers/localStorage";
import useWindowSize, { Size } from "../helpers/WindowSizeHook";

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
        <>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={animationKey}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute top-0 w-full flex"
            >
              {mobileMenuOpen ? (
                <div
                  className="h-screen w-screen flex flex-col justify-evenly items-center absolute top-0"
                  style={{
                    backgroundColor: theme["bg"],
                  }}
                >
                  <MdClose
                    className="absolute top-4 right-4"
                    color={theme["accent"]}
                    size={34}
                    onClick={handleMobileMenu}
                  />
                  <Button
                    onClick={() => handleOpenProjects()}
                    bgColor={theme["accent"]}
                    height={12}
                    width={12}
                    padding={0}
                    _hover={theme["bg"]}
                  >
                    <AiOutlineLaptop size={20} color={theme["bg"]} />
                  </Button>

                  <Button
                    onClick={() => handleContact()}
                    bgColor={theme["accent"]}
                    height={12}
                    width={12}
                    padding={0}
                    _hover={theme["bg"]}
                  >
                    <BiMailSend size={24} color={theme["bg"]} />
                  </Button>
                  <Button
                    onClick={() => handleOpenGithub()}
                    bgColor={theme["accent"]}
                    height={12}
                    width={12}
                    padding={0}
                    _hover={theme["bg"]}
                  >
                    <AiOutlineGithub size={24} color={theme["bg"]} />
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
                        bgColor={theme["accent"]}
                        height={12}
                        width={12}
                        padding={0}
                        _hover={theme["bg"]}
                      >
                        {themeName === "light" ? (
                          <BsSun size={22} color={theme["bg"]} />
                        ) : (
                          <MdNightlight size={22} color={theme["bg"]} />
                        )}
                      </Button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <GiHamburgerMenu
                  className="absolute right-4 top-4"
                  color={theme["accent"]}
                  size={34}
                  onClick={handleMobileMenu}
                  data-aos="fade-left"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <div
          className="absolute right-4 top-4 flex flex-col w-2/5 h-full items-center"
          data-aos="fade-left"
        >
          <div
            className="w-full h-16 rounded-md flex items-center justify-evenly"
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
      )}
    </>
  );
}
