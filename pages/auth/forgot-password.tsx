import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function ForgotPassword() {
  return (
    <>
      <NextSeo title={`Migaloo - Forgot Password`} />
      <div>
        <h2>Forgot Password</h2>
      </div>
    </>
  );
}

export default withContentLayout(ForgotPassword);
