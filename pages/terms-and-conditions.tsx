import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function TermsAndConditions() {
  return (
    <>
      <NextSeo title={`Migaloo - Terms And Conditions`} />
      <div>
        <h2>Terms And Conditions</h2>
      </div>
    </>
  );
}

export default withContentLayout(TermsAndConditions);
