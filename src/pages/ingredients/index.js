import * as React from "react";

import Layout from "../../components/Layout";

import * as styles from "./index.module.sass";

export default class IngredientsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.sectionContainer}>
            <h1>Otty Oxygen Bleach ingredient list</h1>
            <div className={styles.ingredientList}>
              <div className={styles.ingredient}>
                <p>
                  <span>Sodium Percarbonate (100%)</span>
                  Bleaching Agent
                  <br />
                  CAS No.: 15630-89-4
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
