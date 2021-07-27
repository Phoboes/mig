import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Offers() {
  return (
    <>
      <NextSeo title={`Migaloo - Offers`} />
      <div>
        <h2>Offers</h2>
      </div>
    </>
  );
}

export default withContentLayout(Offers);
