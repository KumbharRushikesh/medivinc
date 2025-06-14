import React, { useRef } from "react";
import banneImg from "../Images/productbaner.png";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgphk5a",     // ✅ Replace with your EmailJS service ID
        "template_fqb1msn",    // ✅ Replace with your EmailJS template ID
        form.current,
        "3dhj9_MQ3EE4OvwIs"      // ✅ Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send. Please try again.");
        }
      );

    e.target.reset(); // ✅ Reset form after sending
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
    {/* ✅ Background Overlay Image */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${banneImg})` }}
      ></div>
      <div className="absolute inset-0 bg-[#000000b3] opacity-70"></div>

      {/* ✅ Main Content */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 p-6 md:p-12 gap-10">
        {/* ✅ Left Info Side */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-2xl font-bold">MediVinc</h1>
          <div className="space-y-2">
            <p className="flex items-center gap-2">📞 264-676-4544</p>
            <p className="flex items-center gap-2">📧 tred21medivinc@gmail.com</p>
          </div>
        </div>

        {/* ✅ Right Contact Form */}
        <div className="bg-transparent border-l border-gray-500 pl-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-sm text-gray-300">
            Feel free to contact us and we will get back to you as soon as possible
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="email address"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="tell us about it"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
