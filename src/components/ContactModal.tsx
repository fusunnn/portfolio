import React, { ReactElement, useState } from "react";

import { IoIosExit } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

import { Button, Input, Textarea } from "@chakra-ui/react";

import emailjs from "emailjs-com";

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

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("gmail", "default", e.target, process.env.REACT_APP_USER_ID)
      .then((res) => {
        setIsSending(false);
        setName("");
        setEmail("");
        setMessage("");
        e.target.reset();
      })
      .catch((err) => {
        setIsSending(false);
        console.log(err.text);
      });
  }

  return (
    <>
      {isVisible ? (
        <div className="w-screen h-screen bg-black bg-opacity-30 absolute flex justify-center items-center">
          <div
            data-aos="fade-down"
            className="flex flex-col w-1/2 h-2/3 bg-cream absolute m-auto rounded-lg items-center justify-center"
          >
            <IoIosExit
              size={32}
              color="#1e107a"
              className="absolute right-4 top-4 cursor-pointer"
              onClick={onClose}
            />

            <div className="flex items-end w-40">
              <p className="text-royal text-3xl font-bold">Contact</p>
              <BiMailSend className="m-1" color="#1e107a" size={24} />
            </div>
            <form
              className="flex flex-col items-center justify-evenly h-2/3"
              onSubmit={(e) => handleSubmit(e)}
            >
              <Input
                type="text"
                placeholder="Name"
                bgColor="#1e107a"
                color="#fff9f2"
                fontWeight="bold"
                onChange={(ev) => setName(ev.target.value)}
                name="name"
                value={name}
              />
              <Input
                type="email"
                placeholder="Email"
                bgColor="#1e107a"
                color="#fff9f2"
                fontWeight="bold"
                onChange={(ev) => setEmail(ev.target.value)}
                name="email"
                value={email}
              />

              <Textarea
                type="text"
                placeholder="Message"
                bgColor="#1e107a"
                height={28}
                color="#fff9f2"
                fontWeight="bold"
                onChange={(ev) => setMessage(ev.target.value)}
                name="message"
                value={message}
              />
              <Button
                type="submit"
                bgColor="#1e107a"
                color="#fff9f2"
                isLoading={isSending}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
