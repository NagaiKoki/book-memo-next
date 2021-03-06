import React from "react";
import { AppProps } from "next/app";
import { Layout } from "../components/Layouts/";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default App;
