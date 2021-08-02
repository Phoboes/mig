import { InfoWindow } from "@react-google-maps/api";

export default function MyInputWindow({ lat, lng, setActivePosition }) {
  return (
    <InfoWindow
      position={{ lat, lng }}
      onCloseClick={() => setActivePosition(null)}
    >
      <div className="text-center">
        <h2 className="text-lg m-0">Whale Sightings</h2>
        <hr className="my-1" />
        <h4 className="text-sm">3 days ago</h4>
        <p>
          Sighted by: <strong className="font-medium">Anonymous</strong>
        </p>
      </div>
    </InfoWindow>
  );
}
