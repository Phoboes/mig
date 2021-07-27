import { NextSeo } from "next-seo";
import withMapLayout from "layouts/withMapLayout";

function VantagePoints() {
  return (
    <>
      <NextSeo title={`Migaloo - Vantage Points`} />
      <div>
        <h2>Vantage Points</h2>
      </div>
    </>
  );
}

export default withMapLayout(VantagePoints);
