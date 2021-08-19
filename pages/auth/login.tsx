import { NextSeo } from "next-seo";
import withContentLayout from "layouts/withContentLayout";
import dynamic from "next/dynamic";

const MyLoginForm = dynamic(() => import("components/auth/login"), {
  ssr: false,
});

function Login() {
  return (
    <>
      <NextSeo title={`Migaloo - Login`} />
      <div>
        <MyLoginForm />
      </div>
    </>
  );
}

export default withContentLayout(Login);
