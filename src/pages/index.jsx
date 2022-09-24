import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowToUseSection from "../components/HowToUseSection";

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
            <AboutSection />
            <HowToUseSection />
            <BlogRoll/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
