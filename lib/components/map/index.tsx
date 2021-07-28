import { useState, memo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const center = {
  lat: -33.79798,
  lng: 151.28826,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100vw",
          height: "calc(100vh - 3.5rem)",
        }}
        center={center}
        zoom={13}
      ></GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);

// import { useState, memo } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const fakeMarkup = ["Blue Whale", "Humpback Whale", "Sperm Whale"];

// const getRandomMarkup = () =>
//   fakeMarkup[Math.floor(fakeMarkup.length * Math.random())];

// function MyMarker({
//   lat,
//   lng,
//   markup,
//   setActiveMarker,
//   activeMarker,
//   updateMarker,
// }) {
//   const [draggable, setDraggable] = useState(false);
//   const isActiveMarker = lat === activeMarker?.lat && lng === activeMarker?.lng;
//   return (
//     <>
//       <Marker
//         draggable={draggable}
//         onDragEnd={({ latLng: { lat: newLat, lng: newLng } }) => {
//           updateMarker({
//             oldLat: lat,
//             oldLng: lng,
//             newLat: newLat(),
//             newLng: newLng(),
//           });
//         }}
//         position={{ lat, lng }}
//         onClick={() => {
//           setActiveMarker({ lat, lng });
//         }}
//       >
//         {isActiveMarker && (
//           <InfoWindow
//             onCloseClick={() => {
//               setActiveMarker(null);
//             }}
//           >
//             <div style={{ textAlign: "center" }}>
//               <h2 onClick={() => console.log("Hello")}>{markup}</h2>
//               <h4>Sighted {Math.floor(Math.random() * 8) + 2} days ago</h4>
//               <p onClick={() => setDraggable(!draggable)}>
//                 {draggable ? "Stop being draggable" : "Make draggable"}
//               </p>
//             </div>
//           </InfoWindow>
//         )}
//       </Marker>
//     </>
//   );
// }

// function MyComponent() {
//   const [markers, setMarkers] = useState([
//     [-33.7978, 151.28721, getRandomMarkup()],
//   ]);
//   const [activeMarker, setActiveMarker] = useState(null);

//   function updateMarker({ oldLat, oldLng, newLat, newLng }) {
//     const originalIndex = markers.findIndex(
//       ([lat, lng]) => lat === oldLat && lng === oldLng
//     );
//     const markersCopy = [...markers];
//     markersCopy[originalIndex] = [newLat, newLng, getRandomMarkup()];
//     setMarkers(markersCopy);
//   }

//   const markup = markers.map(([lat, lng, markup]) => (
//     <MyMarker
//       setActiveMarker={setActiveMarker}
//       activeMarker={activeMarker}
//       updateMarker={updateMarker}
//       lat={lat}
//       lng={lng}
//       markup={markup}
//       key={`${lat}${lng}`}
//     />
//   ));

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={{
//           width: "100vw",
//           height: "100vh",
//         }}
//         center={center}
//         zoom={13}
//         onClick={({ latLng: { lat, lng } }) => {
//           setMarkers([...markers, [lat(), lng(), getRandomMarkup()]]);
//         }}
//       >
//         {markup}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default memo(MyComponent);
