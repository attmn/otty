import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import Media from "react-media";
import Modal from "react-modal";

import * as styles from "./ContactForm.module.sass";
import Button from "./Button";

const ContactForm = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        ofType={props.ofType}
        ofSize={props.ofSize}
        isWide={props.isWide}
        aria-expanded={modalIsOpen}
        onClick={() => setIsOpen(!modalIsOpen)}
      >
        {props.text}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(props.setIsOpen(false))}
        className={styles.modalContainer}
        overlayClassName={styles.modalOverlay}
        contentLabel="Modal Menu"
      >
        <ModalMenu setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

const ModalMenu = (props) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={styles.topContainer}>
          <button
            className={styles.closeBtn}
            aria-expanded={true}
            onClick={() => props.setIsOpen(false)}
          >
            <div />
            <div />
          </button>
          <h2>Talk to us</h2>
        </div>
        <Message />
      </div>
    </div>
  );
};

const Message = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const [formStatus, setFormStatus] = useState(false);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/sendgrid", {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        setFormStatus("Error");
        return;
      }

      setFormStatus("Success");
      typeof window !== "undefined" &&
        window.gtag("event", "contact-page-submit", {
          send_to: ["UA-208853161-1"],
        });
      typeof window !== "undefined" &&
        window.gtag("event", "contact-page-submit", {
          send_to: ["G-PQT5W23MR1"],
        });
    } catch (e) {
      //error
      setFormStatus("Error");
    }
  };

  return (
    <div className={styles.contactFormSection}>
      {formStatus === "Success" ? (
        <div>
          Thanks! Your message has been sent. We will get back to you within the
          next 24-48 hours.
        </div>
      ) : formStatus === "Error" ? (
        <div>
          <p>
            Error! The contact form has failed to send. Please try again or
            contact us using another way.
          </p>
          <br />
          <div id={styles.contactGridEmail}>
            <span className={styles.contactGridTitle}>EMAIL</span>
            <br />
            <a href="mailto:info@leadmagnet.uk">
              <p>info@leadmagnet.uk</p>
            </a>
          </div>
          <br />
          <Button type="submit" onClick={() => setFormStatus("")}>
            TRY AGAIN
          </Button>
        </div>
      ) : (
        <div>
          <form
            method="POST"
            name="contact"
            className={styles.contactForm}
            onSubmit={submitForm}
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input
                type="text"
                name="name"
                id="name"
                onChange={onChange}
                maxLength="50"
                required
              />
            </label>
            <label>
              Company
              <input
                type="text"
                name="company"
                id="company"
                onChange={onChange}
                maxLength="50"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                maxLength="50"
                required
              />
            </label>
            <label>
              Phone (optional)
              <input
                type="tel"
                name="tel"
                id="tel"
                onChange={onChange}
                maxLength="20"
              />
            </label>
            <label>
              Message
              <textarea
                type="text"
                name="message"
                id="message"
                onChange={onChange}
                maxLength="500"
                required
              />
            </label>
            <Button ofType="secondary" type="submit">
              Send message
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
