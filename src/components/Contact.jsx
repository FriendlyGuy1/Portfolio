import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/Contact.css";
function Contact() {
  // Getting contact submit straight to e-mail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.user_name;
    const emailInput = form.current.user_email;
    const messageInput = form.current.message;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      toast.error("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm(
        "service_abmmh1r",
        "template_44oip49",
        form.current,
        "arMG9sMfkKB-7tkl2"
      )
      .then(() => {
        toast.success("Email sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <section id="contact">
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={3000}
        limit={4}
      />
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" />
        <input type="email" name="user_email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
