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
  /* eslint @typescript-eslint/no-unsafe-assignment: "off"*/
  /* eslint @typescript-eslint/no-var-requires: "off"*/
  /* eslint @typescript-eslint/no-unsafe-call: "off"*/
  const ReactDOM = require("react-dom");
  //@ts-ignore
  const axe = require("@axe-core/react");
  //@ts-ignore
  axe(React, ReactDOM, 1000);
}
//@ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} className={"relative overflow-x-hidden"} />;
};

export default MyApp;
