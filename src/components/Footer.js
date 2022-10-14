import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

import * as styles from "./Footer.module.sass";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.sectionContainer}>
        <img src={logo} alt="Otty" className={styles.logo} />
        <div className={styles.contactContainer}>
          <a href="mailto:info@ottycleaner.co.uk">info(at)ottycleaner.co.uk</a>
          <ContactForm
            ofType="whiteOutline"
            ofSize="large"
            text="Become a partner"
          />
        </div>
        <div className={styles.socialContainer}>
          <Link to="https://instagram.com/otty.cleaner">
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Instagram"
            >
              <circle cx="32" cy="32.8115" r="32" />
              <g clip-path="url(#clip0_387_393)">
                <path
                  d="M32.0001 27.4804C29.0641 27.4804 26.6681 29.8764 26.6681 32.8124C26.6681 35.7484 29.0641 38.1444 32.0001 38.1444C34.9361 38.1444 37.3321 35.7484 37.3321 32.8124C37.3321 29.8764 34.9361 27.4804 32.0001 27.4804ZM47.9921 32.8124C47.9921 30.6044 48.0121 28.4164 47.8881 26.2124C47.7641 23.6524 47.1801 21.3804 45.3081 19.5084C43.4321 17.6324 41.1641 17.0524 38.6041 16.9284C36.3961 16.8044 34.2081 16.8244 32.0041 16.8244C29.7961 16.8244 27.6081 16.8044 25.4041 16.9284C22.8441 17.0524 20.5721 17.6364 18.7001 19.5084C16.8241 21.3844 16.2441 23.6524 16.1201 26.2124C15.9961 28.4204 16.0161 30.6084 16.0161 32.8124C16.0161 35.0164 15.9961 37.2084 16.1201 39.4124C16.2441 41.9724 16.8281 44.2444 18.7001 46.1164C20.5761 47.9924 22.8441 48.5724 25.4041 48.6964C27.6121 48.8204 29.8001 48.8004 32.0041 48.8004C34.2121 48.8004 36.4001 48.8204 38.6041 48.6964C41.1641 48.5724 43.4361 47.9884 45.3081 46.1164C47.1841 44.2404 47.7641 41.9724 47.8881 39.4124C48.0161 37.2084 47.9921 35.0204 47.9921 32.8124V32.8124ZM32.0001 41.0164C27.4601 41.0164 23.7961 37.3524 23.7961 32.8124C23.7961 28.2724 27.4601 24.6084 32.0001 24.6084C36.5401 24.6084 40.2041 28.2724 40.2041 32.8124C40.2041 37.3524 36.5401 41.0164 32.0001 41.0164ZM40.5401 26.1884C39.4801 26.1884 38.6241 25.3324 38.6241 24.2724C38.6241 23.2124 39.4801 22.3564 40.5401 22.3564C41.6001 22.3564 42.4561 23.2124 42.4561 24.2724C42.4564 24.5241 42.4071 24.7734 42.3109 25.006C42.2147 25.2386 42.0736 25.45 41.8956 25.628C41.7176 25.8059 41.5063 25.9471 41.2737 26.0432C41.0411 26.1394 40.7918 26.1887 40.5401 26.1884V26.1884Z"
                  fill="#59C3AC"
                />
              </g>
              <defs>
                <clipPath id="clip0_387_393">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(16 16.8115)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="https://www.tiktok.com/@otty.cleaner">
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="TikTok"
            >
              <circle cx="32" cy="32.8115" r="32" />
              <path
                d="M41.7614 24.2275C41.5588 24.1228 41.3617 24.008 41.1707 23.8835C40.6156 23.5165 40.1066 23.0841 39.6547 22.5955C38.5227 21.3009 38.1 19.9875 37.9453 19.0689H37.9507C37.8213 18.3049 37.8747 17.8115 37.884 17.8115H32.7307V37.7355C32.7307 38.0022 32.7307 38.2675 32.72 38.5289C32.72 38.5609 32.716 38.5902 32.7147 38.6262C32.7147 38.6395 32.7147 38.6555 32.7107 38.6702V38.6822C32.6566 39.3969 32.4276 40.0873 32.044 40.6928C31.6604 41.2982 31.1338 41.8001 30.5107 42.1542C29.8606 42.524 29.1253 42.718 28.3774 42.7169C25.9774 42.7169 24.0307 40.7595 24.0307 38.3422C24.0307 35.9235 25.9774 33.9662 28.3774 33.9662C28.832 33.9662 29.284 34.0382 29.716 34.1795L29.7227 28.9315C28.4107 28.7623 27.0779 28.8668 25.8083 29.2386C24.5388 29.6104 23.3601 30.2413 22.3467 31.0915C21.4585 31.8629 20.7117 32.7834 20.14 33.8115C19.9227 34.1862 19.1014 35.6942 19.0027 38.1395C18.94 39.5262 19.3574 40.9662 19.556 41.5595V41.5729C19.68 41.9222 20.1654 43.1169 20.9547 44.1235C21.5912 44.9315 22.3433 45.6414 23.1867 46.2302V46.2169L23.1987 46.2302C25.692 47.9235 28.4587 47.8129 28.4587 47.8129C28.9374 47.7929 30.5414 47.8129 32.3627 46.9502C34.3827 45.9929 35.532 44.5675 35.532 44.5675C36.2668 43.7157 36.8512 42.7449 37.26 41.6969C37.7267 40.4702 37.8813 39.0009 37.8813 38.4142V27.8422C37.944 27.8795 38.7774 28.4302 38.7774 28.4302C38.7774 28.4302 39.9774 29.1995 41.848 29.6995C43.1894 30.0555 44.9987 30.1315 44.9987 30.1315V25.0155C44.3654 25.0849 43.0787 24.8849 41.76 24.2289L41.7614 24.2275Z"
                fill="#59C3AC"
              />
            </svg>
          </Link>
          <Link to="https://facebook.com/otty.cleaner">
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Facebook"
            >
              <circle cx="32" cy="32.8115" r="32" />
              <g clip-path="url(#clip0_387_417)">
                <path
                  d="M27.9704 48.8115V33.7962H24V28.39H27.9704V23.7723C27.9704 20.1437 30.3157 16.8115 35.7198 16.8115C37.9078 16.8115 39.5258 17.0213 39.5258 17.0213L39.3983 22.0698C39.3983 22.0698 37.7482 22.0537 35.9476 22.0537C33.9988 22.0537 33.6866 22.9518 33.6866 24.4424V28.39H39.5532L39.2979 33.7962H33.6866V48.8115H27.9704Z"
                  fill="#59C3AC"
                />
              </g>
              <defs>
                <clipPath id="clip0_387_417">
                  <rect
                    width="15.5532"
                    height="32"
                    fill="white"
                    transform="translate(24 16.8115)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="https://youtube.com/channel/UC_ccwZcMGHCWDA9NAVZeePw">
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Youtube"
            >
              <circle cx="32" cy="32.8115" r="32" />
              <g clip-path="url(#clip0_387_421)">
                <path
                  d="M47.3332 25.488C47.152 24.8416 46.799 24.2564 46.3118 23.7946C45.8109 23.3186 45.1969 22.9781 44.5278 22.8053C42.0238 22.1453 31.9918 22.1453 31.9918 22.1453C27.8096 22.0977 23.6284 22.307 19.4718 22.772C18.8028 22.9576 18.1899 23.3057 17.6878 23.7853C17.1945 24.26 16.8372 24.8453 16.6505 25.4866C16.2021 27.9023 15.9842 30.3551 15.9998 32.812C15.9838 35.2666 16.2012 37.7186 16.6505 40.1373C16.8332 40.776 17.1892 41.3586 17.6838 41.8293C18.1785 42.3 18.7945 42.64 19.4718 42.82C22.0092 43.4786 31.9918 43.4786 31.9918 43.4786C36.1794 43.5263 40.3659 43.317 44.5278 42.852C45.1969 42.6791 45.8109 42.3386 46.3118 41.8626C46.7989 41.4009 47.1514 40.8157 47.3318 40.1693C47.792 37.7546 48.0157 35.3007 47.9998 32.8426C48.0345 30.3741 47.811 27.9087 47.3332 25.4866V25.488ZM28.8025 37.3773V28.248L37.1492 32.8133L28.8025 37.3773Z"
                  fill="#59C3AC"
                />
              </g>
              <defs>
                <clipPath id="clip0_387_421">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(16 16.8115)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div>
          <div className={styles.copyright}>
            Otty Cleaner © {year} All rights reserved.
          </div>
          <div className={styles.legal}>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/cookies-policy">Cookies & Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
