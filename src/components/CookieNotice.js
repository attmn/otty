import React, { useState } from "react";
import Button from "./Button";
import * as styles from "./CookieNotice.module.sass";
import { document } from "browser-monads";
import { Link } from "gatsby";

import cookie from "../img/cookie.svg";

const CookieNotice = () => {
  const [cookieExists, setCookieExists] = useState(
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("acceptCookies="))
      ? true
      : false
  );
  const [isVisible, setIsVisible] = useState("");

  const acceptCookies = () => {
    document.cookie =
      "acceptCookies=true; SameSite=None; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    setCookieExists(true);
  };

  let gaProperty = "G-7MVZD0BJZG";
  const disableStr = "ga-disable-" + gaProperty;

  setTimeout(() => {
    setIsVisible("1");
  }, 2000);

  const rejectCokies = () => {
    document.cookie =
      "acceptCookies=false; SameSite=None; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    document.cookie =
      disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/";
    setCookieExists(true);
  };

  return (
    <div>
      {cookieExists !== false ? null : (
        <div
          style={{
            opacity: isVisible,
          }}
          className={styles.container}
        >
          <img src={cookie} alt="" aria-hidden></img>
          <h3>We use cookies</h3>
          <p>
            Cookies help us deliver the best experience on our website, By using
            our website, you agree to the use of cookies.{" "}
            <Link
              to="/cookies-policy"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Cookie & Privacy Policy"
            >
              Learn more
            </Link>
          </p>
          <Button onClick={() => acceptCookies()} isWide>
            Accept all cookies
          </Button>
          <button
            ofType="primaryOutline"
            onClick={() => rejectCokies()}
            className={styles.rejectBtn}
          >
            Use only necessary cookies
          </button>
        </div>
      )}
    </div>
  );
};

export default CookieNotice;
