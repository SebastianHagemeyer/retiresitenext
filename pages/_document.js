import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20 uk-dark" lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body className="uni-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
