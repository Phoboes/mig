import { OverlayView } from "@react-google-maps/api";
import CloseButton from "components/svgs/CloseButton";

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
        {/* <CloseButton/> */}
        <h2 className="text-lg m-0">Whale Sightings</h2>
        <hr className="my-1" />
        <h4 className="text-sm">3 days ago</h4>
        <p>
          Sighted by: <strong className="font-medium">Anonymous</strong>
        </p>
        <div className="m-auto text-center hover:border-blue-900">
          <button className="bg-blue-200 py-2 px-4 hover:bg-blue-400 rounded mt-2">
            Expand
          </button>
        </div>
      </div>
    </OverlayView>
  );
}
