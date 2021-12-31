import React, { ReactElement, useContext } from "react";

import { Button } from "@chakra-ui/react";

import { ThemeContext } from "../../context/ThemeContext";

import { AnimatePresence, motion } from "framer-motion";

import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

interface Props {
  handleOpenProjects: () => void;
  handleContact: () => void;
  handleOpenGithub: () => void;
  handleChangeTheme: () => void;
  themeName: string;
}

export default function DesktopMenu({
  handleOpenProjects,
  handleOpenGithub,
  handleChangeTheme,
  handleContact,
  themeName,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="fixed right-4 top-4 flex flex-col w-2/5 h-full items-center"
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
  );
}
