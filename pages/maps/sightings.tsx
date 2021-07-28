import { NextSeo } from "next-seo";
import withMapLayout from "layouts/withMapLayout";
import Map from "components/map";

function Sightings() {
  return (
    <>
      <NextSeo title={`Migaloo - Sightings`} />
      <Map />
    </>
  );
}

export default withMapLayout(Sightings);
