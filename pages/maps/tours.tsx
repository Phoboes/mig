import { NextSeo } from "next-seo";
import withMapLayout from "layouts/withMapLayout";

function Tours() {
  return (
    <>
      <NextSeo title={`Migaloo - Tours`} />
      <div>
        <h2>Tours</h2>
      </div>
    </>
  );
}

export default withMapLayout(Tours);
