import { NextSeo } from "next-seo";
import withMapLayout from "layouts/withMapLayout";
import Map from "components/map";

function Home() {
  return (
    <>
      <NextSeo title={`Migaloo - Home`} />
      <Map />
    </>
  );
}

export default withMapLayout(Home);
