import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowToUseSection from "../components/HowToUseSection";
import VideoSection from "../components/VideoSection";
import CompareSection from "../components/CompareSection";
import Wave from "../components/TopWave";
import BuySection from "../components/BuySection";
import FaqSection from "../components/FaqSection";

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
            <Wave />
            <AboutSection />
            <Wave top />
            <HowToUseSection />
            <Wave />
            <VideoSection />
            <Wave top />
            <CompareSection />
            <Wave />
            <BlogRoll/>
            <Wave top />
            <BuySection />
            <Wave />
            <FaqSection />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
