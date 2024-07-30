import React, { useState } from "react";
import emailjs from "emailjs-com";
import SectionTitle from "../section-title";
import Button from "../button";

const ContactMeSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send(
        "service_swe_portfolio",
        "template_email_to_dias",
        templateParams,
        "Sw6TQYLCdKlHeVb3g"
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setErrorMessage("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contactme"
      className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 min-h-screen relative mt-12 sm:mt-16 md:mt-20 lg:mt-24"
    >
      <SectionTitle title="Contact Me" />
      <div className="w-full flex justify-center sm:justify-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-primary-text-color font-bold">
                Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Keltizarov"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input h-10 w-full input-bordered text-sm bg-secondary-background-color text-primary-text-color"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-primary-text-color font-bold">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="akviduk@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input h-10 w-full input-bordered text-sm bg-secondary-background-color text-primary-text-color"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-primary-text-color font-bold">
                Message
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered bg-secondary-background-color text-primary-text-color h-48 w-full"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <div className="flex justify-center sm:justify-start">
            <Button type="submit" className="w-full sm:w-64 h-12">
              Send
            </Button>
          </div>
          {successMessage && (
            <p className="font-bold text-green-500 mt-4 text-center sm:text-left">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="font-bold text-red-500 mt-4 text-center sm:text-left">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMeSection;
