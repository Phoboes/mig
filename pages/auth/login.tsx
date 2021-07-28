import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";

function Login() {
  return (
    <>
      <NextSeo title={`Migaloo - Login`} />
      <div>
        <h2>Login</h2>
      </div>
    </>
  );
}

export default withContentLayout(Login);
