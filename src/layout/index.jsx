import React from "react";
import { Helmet } from "react-helmet";
import Ribbon from "../components/Ribbon/Ribbon";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Ribbon/>
      {children}
    </div>
  );
}
