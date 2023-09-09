import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.scss";
import Moon from "../assets/moon.png"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s66260y",
        "template_rtnichq",
        form.current,
        "0OG0adt5qZndtqWkZ"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Your Message is Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Something wet wrong...");
        }
      );
  };

  return (
    <div className="ContactUs">
      <div className="left">
      <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" required />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" required />
      </div>
      <input type="submit" value="Send" id="send"/>
    </form>
      </div>

      <div className="right" align="center">
        <img src={Moon} alt="" />
      </div>
    </div>
  );
};
