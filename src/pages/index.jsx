import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/Hero";

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
            <Hero />
            <BlogRoll/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
