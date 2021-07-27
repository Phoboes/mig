import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Tips() {
  return (
    <>
      <NextSeo title={`Migaloo - Tips`} />
      <div>
        <h2>Tips</h2>
      </div>
    </>
  );
}

export default withContentLayout(Tips);
