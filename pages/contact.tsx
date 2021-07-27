import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Contact() {
  return (
    <>
      <NextSeo title={`Migaloo - Contact`} />
      <div>
        <h2>Contact</h2>
      </div>
    </>
  );
}

export default withContentLayout(Contact);
