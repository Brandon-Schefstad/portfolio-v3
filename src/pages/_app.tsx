import React from "react";
import "~/styles/globals.css";

/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
function getIsServerRendered() {
  return typeof window === "undefined";
}

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 */
if (process.env.NODE_ENV !== "production" && !getIsServerRendered()) {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
