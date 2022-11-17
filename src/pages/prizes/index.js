import * as React from "react";

import Layout from "../../components/Layout";
import SpinWheel from "../../components/spinWheel";

import * as styles from "./index.module.sass";

export default class PrizesPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.sectionContainer}>
            <h1>Prizes</h1>
            <SpinWheel />
          </div>
        </div>
      </Layout>
    );
  }
}
