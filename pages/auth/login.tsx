import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";
import LoginForm from "components/auth/login";

function Login() {
  return (
    <>
      <NextSeo title={`Migaloo - Login`} />
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default withContentLayout(Login);
