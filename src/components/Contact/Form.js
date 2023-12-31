import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Form = () => {
  let disabled = false;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    disabled = true
    emailjs.sendForm('service_kl5qsde', 'template_pl6a2xn', form.current, 'fh4pnPEkrSOsgYvZU')
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
        disabled = false;
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
        disabled = false;
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name"></input>
        <label>Email</label>
        <input type="email" name="from_email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" />
        <button type="submit" disabled={disabled} className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
