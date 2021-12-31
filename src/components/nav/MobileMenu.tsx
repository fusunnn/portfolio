import React, { ReactElement, useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@chakra-ui/react";

import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdNightlight, MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  mobileMenuOpen: boolean;
  animationKey: string;
  handleMobileMenu: () => void;
  themeName: string;
  handleChangeTheme: () => void;
  handleOpenGithub: () => void;
  handleOpenProjects: () => void;
  handleContact: () => void;
}

export default function MobileMenu({
  mobileMenuOpen,
  handleMobileMenu,
  animationKey,
  themeName,
  handleChangeTheme,
  handleOpenGithub,
  handleOpenProjects,
  handleContact,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
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
  );
}
