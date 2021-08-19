import Overlay from "..";

export default function Sighting({ toggleState, sighting }) {
  console.log(sighting);
  return (
    <Overlay toggleState={toggleState}>
      <h1 className="pt-4 text-blue-500 font-bold text-xl">
        {sighting.species}
      </h1>
      <p className="text-blue-500 text-xs">{sighting.date}</p>
      <hr className="my-1 mt-2" />
      <p className="pt-4">{sighting.description}</p>
    </Overlay>
  );
}
