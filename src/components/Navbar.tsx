import React, { ReactElement } from "react";
import { Button } from "@chakra-ui/react";

import { AiOutlineGithub } from "react-icons/ai";
import { GrContact } from "react-icons/gr";

interface Props {
  handleContactModal: () => void;
}

export default function Navbar({ handleContactModal }: Props): ReactElement {
  function handleOpenGithub() {
    window.open("https://github.com/fusunnn", "_blank");
  }

  function handleOpenProjects() {}

  function handleContact() {
    handleContactModal();
  }

  return (
    <div
      className="w-4/12 h-16 bg-royal absolute right-4 top-4 rounded-md flex items-center justify-evenly"
      data-aos="fade-left"
    >
      <Button onClick={() => handleOpenGithub()} bgColor="#fff9f2">
        <AiOutlineGithub size={24} />
      </Button>
      <Button onClick={() => handleOpenProjects()} bgColor="#fff9f2">
        Projects
      </Button>
      <Button onClick={() => handleContact()} bgColor="#fff9f2">
        <GrContact size={20} />
      </Button>
    </div>
  );
}
