import { NextSeo } from "next-seo";
import withMapLayout from "layouts/withMapLayout";

function Sightings() {
  return (
    <>
      <NextSeo title={`Migaloo - Sightings`} />
      <div>
        <h2>Sightings</h2>
      </div>
    </>
  );
}

export default withMapLayout(Sightings);
