import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import Media from "react-media";
import Modal from "react-modal";

import * as styles from "./ContactForm.module.sass";

const ContactForm = ({ props }) => {
  const { setIsOpen, modalIsOpen } = props;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(props.setIsOpen(false))}
        className={styles.modalContainer}
        overlayClassName={styles.modalOverlay}
        contentLabel="Modal Menu"
      >
        <ModalMenu />
      </Modal>
    </div>
  );
};

const ModalMenu = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div>
          <Link className={styles.menuItem} to="/#about">
            What is Otty?
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/#how-to-use">
            How to use
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/#examples">
            Examples
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/#eco">
            Eco-friendly
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/blog">
            Blog
          </Link>
        </div>
        <div>
          <Link className={styles.menuItem} to="/#contact">
            Contact
          </Link>
        </div>
        <Link to="/#buy">
          <Button ofType="tertiary" ofSize="large">
            Buy now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
