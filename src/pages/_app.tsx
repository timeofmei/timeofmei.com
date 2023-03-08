import "@/styles/globals.css";
import "@chinese-fonts/dyh/dist/SmileySans-Oblique/result.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
