import React from "react";
import Link from "next/link";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            sizes="76"
            href={require("assets/img/brand/Logo Katarsis.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/brand/Logo.png")}
          />
          {/* Fonts and icons */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
        </Head>
        <body className="g-sidenav-show g-sidenav-pinned">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
