import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Species() {
  return (
    <>
      <NextSeo title={`Migaloo - Species`} />
      <div>
        <h2>Species</h2>
      </div>
    </>
  );
}

export default withContentLayout(Species);
