import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import Block from "../components/Block/Block";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Landing() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Block/>
    </Layout>
  );
}

export default Landing;
