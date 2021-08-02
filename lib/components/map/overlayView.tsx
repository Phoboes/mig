import { OverlayView } from "@react-google-maps/api";

export default function MyOverlayView({ lat, lng }) {
  return (
    <OverlayView
      mapPaneName="floatPane"
      position={{ lat, lng }}
      getPixelPositionOffset={(offsetWidth, offsetHeight) => {
        return { x: -offsetWidth / 2, y: -offsetHeight * 1.5 };
      }}
    >
      <div className="text-left bg-white p-3 border-2 border-blue-900">
        <h2 className="text-lg m-0">Whale Sightings</h2>
        <hr className="my-1" />
        <h4 className="text-sm">3 days ago</h4>
        <p>
          Sighted by: <strong className="font-medium">Anonymous</strong>
        </p>
      </div>
    </OverlayView>
  );
}
