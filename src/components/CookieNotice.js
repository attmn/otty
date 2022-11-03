import React from "react";
import * as styles from "./CookieNotice.module.sass";

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
        <h3>We use cookies</h3>
        <p>
          Cookies help us deliver the best experience on our website, By using
          our website, you agree to the use of cookies. Learn more.
        </p>
        <button onClick={() => acceptCookies()}>Accept all cookies</button>
        <button onClick={() => rejectCokies()}>
          Use only necessary cookies
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default CookieNotice;
