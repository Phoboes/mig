import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Home() {
  return (
    <>
      <NextSeo title={`Migaloo - Home`} />
      <div>
        <h2>Home</h2>
      </div>
    </>
  );
}

export default withContentLayout(Home);
