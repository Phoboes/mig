import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function About() {
  return (
    <>
      <NextSeo title={`Migaloo - About`} />
      <div>
        <h2>About</h2>
      </div>
    </>
  );
}

export default withContentLayout(About);
