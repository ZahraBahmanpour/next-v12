import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About React</title>
        <meta name="description" content="Page about React" />
      </Head>
      <h1>About</h1>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
