"use client";
import React, { FormEvent, useRef, useState, RefObject } from "react";
import emailjs from "@emailjs/browser";
import LabelForm from "./components/LabelForm";
import InputTextForm from "./components/InputTextForm";
function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef() as RefObject<HTMLFormElement>;
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then((result) => {
        // show the user a success message
        console.log(result);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        form.current?.reset();
      });
  };

  return (
    <div className="mb-20  w-full">
      <form onSubmit={sendEmail} ref={form}>
        <div className="mb-3 pt-0">
          <LabelForm title="Nom" id="name" />
          <InputTextForm
            placeholder="Votre nom / nom de société"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3 pt-0">
          <LabelForm title="email" id="email" />
          <InputTextForm
            placeholder="adresse@mail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3 pt-0">
          <LabelForm title="Votre message" id="message" />
          <textarea
            placeholder="Votre message"
            id="message"
            name="message"
            className="px-3 py-3  focus:outline-main500 focus:outline-3 placeholder-gray-400 text-gray-600 relative   rounded text-sm border-0 shadow outline-none focus:outline-none mt-4  w-full"
            required
            cols={5}
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            disabled={isLoading}
            className="bg-main500 text-white active:bg-main500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            {isLoading ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      </form>
      {isSent && (
        <p className="text-main300">
          Votre message a bien été envoyé! Vous recevrez une réponse de ma part
          dans les 48h.
        </p>
      )}
    </div>
  );
}

export default ContactSection;
