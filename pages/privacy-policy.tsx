import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function PrivacyPolicy() {
  return (
    <>
      <NextSeo title={`Migaloo - Privacy Policy`} />
      <div>
        <h2>Privacy Policy</h2>
      </div>
    </>
  );
}

export default withContentLayout(PrivacyPolicy);
