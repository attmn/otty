import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll"

const IndexPage = () => (
  <Layout>
    <section className="section">
      <Helmet title={`Otty`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Otty</h1>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
