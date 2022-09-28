import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowToUseSection from "../components/HowToUseSection";
import VideoSection from "../components/VideoSection";
import CompareSection from "../components/CompareSection";
import Wave from "../components/Wave";
import BuySection from "../components/BuySection";
import FaqSection from "../components/FaqSection";

const IndexPage = () => (
  <Layout>
    <section >
      <Helmet title={`Otty`} />
      <div>
            <Hero />
            <Wave />
            <AboutSection />
            <Wave type="top" />
            <HowToUseSection />
            <Wave />
            <VideoSection />
            <Wave type="top" />
            <CompareSection />
            <Wave />
            <BlogRoll/>
            <Wave type="top" />
            <BuySection />
            <Wave />
            <FaqSection />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
