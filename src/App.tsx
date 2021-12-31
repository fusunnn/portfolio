import React, { useContext, useEffect, useState } from "react";

import Navbar from "./components/nav/Navbar";
import ContactModal from "./components/ContactModal";
import TitleSection from "./sections/TitleSection";
import ProjectSection from "./sections/ProjectSection";

import { ThemeContext } from "./context/ThemeContext";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isModalVisble, setIsModalVisble] = useState<boolean>(false);

  const { theme } = useContext(ThemeContext);

  function handleContactModal() {
    setIsModalVisble((prevState) => !prevState);
  }
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      className="flex flex-col w-screen"
      style={{ backgroundColor: theme["bg"] }}
    >
      <ReactNotification />

      <Navbar handleContactModal={handleContactModal} />
      <ContactModal isVisible={isModalVisble} onClose={handleContactModal} />

      <TitleSection />
      {/* <ProjectSection /> */}
    </div>
  );
}

export default App;
