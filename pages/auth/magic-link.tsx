import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function MagicLink() {
  return (
    <>
      <NextSeo title={`Migaloo - Magic Link Login`} />
      <div>
        <h2>Magic Link Login</h2>
      </div>
    </>
  );
}

export default withContentLayout(MagicLink);
