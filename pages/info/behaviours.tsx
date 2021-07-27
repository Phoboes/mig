import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Behaviours() {
  return (
    <>
      <NextSeo title={`Migaloo - Behaviours`} />
      <div>
        <h2>Behaviours</h2>
      </div>
    </>
  );
}

export default withContentLayout(Behaviours);
