import * as React from "react";

import Layout from "../../components/Layout";
import * as styles from "../cookies-policy/index.module.sass";

export default class TermsConditionsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.sectionContainer}>
            <h1>Terms & Conditions</h1>
            <p>
              These terms and conditions (the “Terms”) are the terms on which
              this website (the “Website”) is made available to you
              (“you”/”your”). By accessing this Website you agree to be bound by
              these Terms. If you do not agree to these Terms, please do not use
              the Website.
            </p>
            <div className={styles.sectionDiv}>
              <h3>INFO ABOUT US</h3>
              <p>
                Teman Ltd. ("we", "us", or "our") is a limited company
                registered in England & Wales under registration number 12018351
                and trading under the name Otty. Registered address is Suite
                1065, Unit 3a 34-35 Hatton Garden, Holborn, London, United
                Kingdom, EC1N 8DX.
              </p>
              <h4>QUESTIONS & COMPLAINTS</h4>
              <p>
                If you have any questions, complaints, or comments about this
                Website, please contact us by email - info@ottycleaner.co.uk
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
