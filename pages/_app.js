import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>My Project</title>
        <meta name="description" content="React Project" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
