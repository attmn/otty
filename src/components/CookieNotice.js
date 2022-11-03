import React from "react";
import Button from "./Button";
import * as styles from "./CookieNotice.module.sass";
import cookie from "../img/cookie.svg";
import { document } from ‘browser-monads’;

function checkACookieExists() {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("acceptCookies="))
  ) {
    return true;
  }
}

function removeItem(sKey, sPath, sDomain) {
  document.cookie =
    encodeURIComponent(sKey) +
    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "");
}

function acceptCookies() {
  document.cookie = "acceptCookies=true; SameSite=None; Secure";
  removeItem(disableStr);
}

const rejectCokies = () => {
  document.cookie = "acceptCookies=true; SameSite=None; Secure";
};

let gaProperty = "G-7MVZD0BJZG",
  disableStr = "ga-disable-" + gaProperty;
document.cookie.indexOf(disableStr + "=true") > -1 && (window[disableStr] = !0);

const CookieNotice = () => {
  if (checkACookieExists() === undefined) {
    document.cookie =
      disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/";
    return (
      <div className={styles.container}>
        <img src={cookie} alt="" aria-hidden></img>
        <h3>We use cookies</h3>
        <p>
          Cookies help us deliver the best experience on our website, By using
          our website, you agree to the use of cookies. Learn more.
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
    );
  } else {
    return null;
  }
};

export default CookieNotice;
