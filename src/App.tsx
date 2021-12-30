import React, { useContext, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import { ThemeContext, Themes } from "./context/ThemeContext";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isModalVisble, setIsModalVisble] = useState<boolean>(false);

  const { theme, setTheme } = useContext(ThemeContext);

  function handleContactModal() {
    setIsModalVisble((prevState) => !prevState);
  }
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      className="flex flex-col justify-center h-screen"
      style={{ backgroundColor: theme["bg"] }}
    >
      <ReactNotification />
      <Navbar handleContactModal={handleContactModal} />

      <ContactModal isVisible={isModalVisble} onClose={handleContactModal} />
      <div className="title-container" data-aos="fade-up">
        <p
          className="text-8xl font-bold mx-4"
          style={{ color: theme["accent"] }}
        >
          Ivan
        </p>
        <p
          className="text-8xl font-bold mx-4"
          style={{ color: theme["accent"] }}
        >
          Audouard
        </p>
      </div>
    </div>
  );
}

export default App;
