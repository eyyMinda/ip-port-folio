import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html suppressHydrationWarning>
      <Head>
        <title>IP:PORT --folio</title>
      </Head>
      <body>
        <Component {...pageProps} />
        <Analytics />
      </body>
    </html>
  );
}
