import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isModalVisble, setIsModalVisble] = useState<boolean>(false);

  function handleContactModal() {
    setIsModalVisble((prevState) => !prevState);
  }
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen bg-cream ">
      <Navbar handleContactModal={handleContactModal} />
      <ContactModal isVisible={isModalVisble} onClose={handleContactModal} />
      <div className="title-container" data-aos="fade-up">
        <p className="text-8xl text-royal font-bold mx-4">Ivan</p>
        <p className="text-8xl text-royal font-bold mx-4">Audouard</p>
      </div>
    </div>
  );
}

export default App;
