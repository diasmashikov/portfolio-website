import React, { useState } from "react";
import emailjs from "emailjs-com";

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
      className="flex flex-col px-36 min-h-screen relative"
    >
      <h2 className="text-6xl font-bold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Name</span>
          </div>
          <input
            type="text"
            placeholder="Keltizarov"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input h-10 w-1/2 input-bordered text-sm "
            required
          />
        </label>

        <label className="form-control ">
          <div className="label">
            <span className="label-text font-bold">Email</span>
          </div>
          <input
            type="email"
            placeholder="akviduk@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input h-10 w-1/2 input-bordered text-sm "
            required
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-48 w-1/2"
            placeholder="Type your message here."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>

        <button type="submit" className="btn bg-gray-800 text-white w-48">
          Send
        </button>
        {successMessage && (
          <p className="font-bold text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="font-bold text-red-500 mt-4">{errorMessage}</p>
        )}
      </form>
    </section>
  );
};

export default ContactMeSection;
