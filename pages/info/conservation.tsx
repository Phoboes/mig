import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Conservation() {
  return (
    <>
      <NextSeo title={`Migaloo - Conservation`} />
      <div>
        <h2>Conservation</h2>
      </div>
    </>
  );
}

export default withContentLayout(Conservation);
