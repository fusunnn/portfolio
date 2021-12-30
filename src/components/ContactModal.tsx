import React, { ReactElement, useState, useRef, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import { IoIosExit } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

import { Button, Input, Textarea } from "@chakra-ui/react";

import { store } from "react-notifications-component";

import emailjs from "emailjs-com";

import { motion } from "framer-motion";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isVisible,
  onClose,
}: Props): ReactElement {
  const [isSending, setIsSending] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { theme } = useContext(ThemeContext);

  const modalRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        setIsSending(false);
        setName("");
        setEmail("");
        setMessage("");
        e.target.reset();
      })
      .then(() => {
        store.addNotification({
          title: "Wonderful!",
          message:
            "Your message was successfully sent, I'll get back to you as soon as I can!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      })
      .catch((err) => {
        setIsSending(false);
        console.log(err.text);
        store.addNotification({
          title: "Ouch!",
          message:
            "Sorry, there was an error sending your message, you can also contact me at my email: i.audouard22@ejm.org",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 8000,
            onScreen: true,
          },
        });
      });
  }

  function handleCloseModal(e: React.MouseEvent) {
    if (e.target === modalRef.current) {
      onClose();
    }
  }

  return (
    <>
      {isVisible ? (
        <div
          className="w-screen h-screen bg-black bg-opacity-30 absolute flex justify-center items-center"
          ref={modalRef}
          onClick={(e) => handleCloseModal(e)}
        >
          <motion.div
            className="flex flex-col w-2/5 h-auto absolute m-auto rounded-lg items-center justify-center"
            style={{ backgroundColor: theme["accent"] }}
            key="modal"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoIosExit
              size={32}
              color={theme["bg"]}
              className="absolute right-4 top-4 cursor-pointer"
              onClick={onClose}
            />

            <div className="flex items-end w-40 mt-8 mb-4">
              <p className="text-3xl font-bold" style={{ color: theme["bg"] }}>
                Contact
              </p>
              <BiMailSend className="m-1" color={theme["bg"]} size={24} />
            </div>
            <form
              className="flex flex-col items-center justify-evenly h-2/3"
              onSubmit={(e) => handleSubmit(e)}
            >
              <Input
                type="text"
                placeholder="Name"
                bgColor={theme["bg"]}
                color={theme["accent"]}
                fontWeight="bold"
                onChange={(ev) => setName(ev.target.value)}
                name="name"
                value={name}
                className="my-4"
              />
              <Input
                type="email"
                placeholder="Email"
                bgColor={theme["bg"]}
                color={theme["accent"]}
                fontWeight="bold"
                onChange={(ev) => setEmail(ev.target.value)}
                name="email"
                value={email}
                className="my-4"
              />

              <Textarea
                type="text"
                placeholder="Message"
                bgColor={theme["bg"]}
                color={theme["accent"]}
                height={28}
                fontWeight="bold"
                onChange={(ev) => setMessage(ev.target.value)}
                name="message"
                value={message}
                className="my-4"
              />
              <Button
                type="submit"
                bgColor={theme["bg"]}
                color={theme["accent"]}
                isLoading={isSending}
                className="mt-4 mb-8"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
