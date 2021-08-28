import { Marker } from "@react-google-maps/api";

const Silhouette = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M464.63,17.94v1.2c-4.05,9.69-7.09,19.82-14.26,28A109.9,109.9,0,0,1,420.12,71c-19.63,10.75-39.33,21.4-58.67,32.66-9.85,5.74-18.71,13.19-28.53,19-7.76,4.59-16.35,7.75-24.51,11.68-10.85,5.24-22,10.08-32.32,16.19-4.25,2.5-7,7.71-10.11,11.95-3.37,4.65-6.32,9.59-9.4,14.44-.75,1.18-2,2.63-1.81,3.73,2.59,14,4.25,28.37,8.43,41.93,5.85,19,13.63,37.34,20.59,56,.48,1.28,1,2.53,2.13,5.29-11.39-.87-21.8-1.91-32.25-2.39-6.33-.29-12.71.33-19.07.44-8.71.14-17.43.05-26.14.34-5.07.16-10.11.87-16.49,1.45,2-4.47,3.46-7.8,5-11.08,11.65-24.81,19.46-50.82,25.57-77.51,2.36-10.28,2.33-18.6-5.64-26a9.42,9.42,0,0,1-2.42-4.08c-2.83-9.51-9.93-14.34-18.58-17.93-14.24-5.9-28.48-11.83-42.39-18.44-12.79-6.08-26.15-11.71-37.42-20C103.19,99.1,88.83,93,74.94,85.69,60,77.79,45.1,69.6,30.62,60.84,19.92,54.35,12.45,44.24,5.3,34.2,2.7,30.57,1.72,25.79,0,21.54v-3.6C2.25,12.7,4.42,7.42,6.86,2.27,7.34,1.25,8.89.74,10,0c.55,1.11,1.46,2.17,1.6,3.33,1.14,9.91,9.24,14.81,18.36,10.74,3.86-1.72,6.67-1.44,9.55,1.83,1.65,1.87,4,3.92,6.33,4.22a93.82,93.82,0,0,0,17.65.65c7.94-.5,16.14,1.78,23.85-2.66,1.57-.91,5.32.75,7.42,2.18,4.84,3.31,9.34,6.24,15.65,3.61,1.8-.74,4.55.11,6.64.84,10.32,3.62,20.37,9.53,30.91,10.55,9.12.89,18.22,6.49,27.9,2.14,1.23-.55,3.8.93,5.31,2.06,11.11,8.29,24,9.59,37.28,10.81,6,.55,13.95.91,15.28,10.27.28,1.91,3.23,4.62,5.13,4.79,1.74.15,5.05-2.4,5.39-4.2,2.05-10.57,10.8-9.41,18-10.9,8.6-1.79,17.41-2.82,25.84-5.19,7.54-2.12,14.53-6.2,22.08-8.28,4.18-1.14,9.16.86,13.51.05,11.1-2.07,21.66-5.83,31.1-12.38a7.48,7.48,0,0,1,6.07-.47c5.64,2.27,10.17.9,14-3.36,3-3.42,6.23-3.4,10.21-1.79,3.2,1.28,7.11,3,10.06,2.23,7.55-2.08,15.13,1.15,22.9-1.43,3.14-1,7-.87,9.35-3.67,2.88-3.45,5.74-3.86,9.4-1.67,4.13,2.46,8.53,2.19,11.53-1.23s5-8.09,7.88-12.85c.77.91,3.48,2.71,3.3,4.14C458.67,10,463.9,13.08,464.63,17.94Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 240, y: 420 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default Silhouette;