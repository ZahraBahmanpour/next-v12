export default function About() {
  return <h1>About</h1>;
}

About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
