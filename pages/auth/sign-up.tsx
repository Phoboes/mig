import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function SignUp() {
  return (
    <>
      <NextSeo title={`Migaloo - Sign Up`} />
      <div>
        <h2>Sign Up</h2>
      </div>
    </>
  );
}

export default withContentLayout(SignUp);
