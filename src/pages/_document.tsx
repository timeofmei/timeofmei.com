import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="timeofmei's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-background bg-cover bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
