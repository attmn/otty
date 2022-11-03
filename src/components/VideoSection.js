import React, { Fragment } from "react";
import Media from "react-media";

import * as styles from "./VideoSection.module.sass";
import Button from "./Button";
import { Link } from "gatsby";

const VideoSection = () => {
  return (
    <div className={styles.container} id="examples">
      <div className={styles.sectionContainer}>
        <h2>See Otty in action</h2>
        <div className={styles.videoContainer}>
          <div className={styles.videoGroup}>
            <div className={styles.video} />
            <div className={styles.video} />
          </div>
          <div className={styles.videoGroup}>
            <div className={styles.video} />
            <div className={styles.video} />
          </div>
        </div>
        <Media
          queries={{
            small: "(max-width: 600px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small ? (
                <div className={styles.btnContainer}>
                  <Link to="https://www.tiktok.com/@otty.cleaner">
                    <Button
                      ofType="primary"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.8rem",
                      }}
                      isWide
                    >
                      See more on <TikTok />
                      TikTok
                    </Button>
                  </Link>
                  <Link to="https://instagram.com/otty.cleaner">
                    <Button
                      ofType="primaryOutline"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.8rem",
                      }}
                      isWide
                    >
                      See more on <Instagram /> Instagram
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className={styles.btnContainer}>
                  <Link to="https://www.tiktok.com/@otty.cleaner">
                    <Button
                      ofType="primary"
                      ofSize="large"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.8rem",
                      }}
                    >
                      See more on <TikTok />
                      TikTok
                    </Button>
                  </Link>
                  <Link to="https://instagram.com/otty.cleaner">
                    <Button
                      ofType="primaryOutline"
                      ofSize="large"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.8rem",
                      }}
                    >
                      See more on <Instagram /> Instagram
                    </Button>
                  </Link>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </div>
  );
};

const TikTok = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
      />
    </svg>
  );
};

const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default VideoSection;
