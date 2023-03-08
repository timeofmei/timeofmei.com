import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <meta name="description" content="timeofmei's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-cover bg-center bg-background bg-no-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
