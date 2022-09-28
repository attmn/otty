import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import Media from "react-media";
import Modal from "react-modal";
import classNames from "classnames";

import Logo from "../img/logo.svg";
import Button from "./Button";
import * as styles from "./Navbar.module.sass";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={classNames(styles.navbarContainer, {
          [`${styles.modalIsOpen}`]: modalIsOpen === true,
        })}
      >
        <nav
          className={styles.navbarBody}
          role="navigation"
          aria-label="main-navigation"
        >
          <Link to="/" title="Logo">
            <img src={Logo} alt="Otty" />
          </Link>
          <Media
            queries={{
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {!matches.large && (
                  <button
                    className={`${styles.burgerMenu} ${
                      modalIsOpen && styles.burgerMenuActive
                    }`}
                    aria-expanded={modalIsOpen}
                    onClick={() => setIsOpen(!modalIsOpen)}
                  >
                    <div />
                    <div />
                  </button>
                )}
                {matches.large && (
                  <div id="navMenu" className={styles.menuGrid}>
                    <Link className={styles.menuItem} to="/#about">
                      What is Otty?
                    </Link>
                    <Link className={styles.menuItem} to="/#how-to-use">
                      How to use
                    </Link>
                    <Link className={styles.menuItem} to="/#examples">
                      Examples
                    </Link>
                    <Link className={styles.menuItem} to="/#eco">
                      Eco-friendly
                    </Link>
                    <Link className={styles.menuItem} to="/blog">
                      Blog
                    </Link>
                    <Link className={styles.menuItem} to="/#contact">
                      Contact
                    </Link>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
          <Link to="/#buy" className={styles.button}>
            <Button ofType="tertiary">Buy now</Button>
          </Link>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            contentLabel="Modal Menu"
          >
            <ModalMenu />
          </Modal>
        </nav>
      </div>
      <svg
        viewBox="0 0 1920 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.navbarWave}
      >
        <g clip-path="url(#clip0_324_566)">
          <path
            d="M-20 3.02093C34 16.4738 51 3.02093 258 3.02093C515.574 3.02093 608.855 10.1501 776.5 3.02093C943 -4.05955 1178.58 6.91528 1398 6.91528C1554 6.91528 1655.5 -5.82967 1939 6.91528V-100H-20V3.02093Z"
            fill="#309985"
          />
        </g>
        <defs>
          <clipPath id="clip0_324_566">
            <rect width="1920" height="9" fill="white" />
          </clipPath>
        </defs>
      </svg>
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

export default Navbar;
