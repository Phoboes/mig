import { Marker } from "@react-google-maps/api";

const Silhouette = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M419.63,29.18c-3.8,9.68-11.81,14.9-19.84,20.24-6.8,4.53-13.61,9-20.5,13.45a16.83,16.83,0,0,1-5,2.2,28.69,28.69,0,0,0-14.74,8.8A10.61,10.61,0,0,1,358.45,75c-.78.65-1.61,1.24-2.39,1.88-3.7,3.09-7.29,6.33-11.15,9.21a30,30,0,0,1-5.28,2.74c-.44.21-.89.43-1.32.66a51.54,51.54,0,0,0-6.78,3.89c-6.74,5-13.36,10.24-20,15.37a7.56,7.56,0,0,1-1.46.94,91.47,91.47,0,0,0-21.37,13.77c-3.29,2.91-7.31,5-10.88,7.59a55.6,55.6,0,0,0-7.53,6.19c-4.17,4.33-9.52,7-14.24,10.5-1.64,1.22-3.75,2.08-4.84,3.67-2.35,3.4-4.18,7.17-6.22,10.79a.56.56,0,0,0,0,.29q0,13.44.1,26.89c0,1.36.15,2.71,0,4-.68,7.4,1.07,14.38,3,21.44A50.84,50.84,0,0,1,250,228.74c-.05,5.43.29,10.61,2.57,15.59.11.23.21.46.31.68a122.16,122.16,0,0,1-47.94,1.61c.08-8.07-1.63-16.11-1.78-24.18,0-2.11.11-4.23,0-6.34-.25-4.92-.6-9.83-.93-14.73a10.09,10.09,0,0,1-.22-2.59c1.54-7.62-.57-14.84-2.43-22-2-7.82-6.59-14.06-12.68-19.29-3-2.54-5.54-5.68-8.76-7.82a70.75,70.75,0,0,0-11.77-5.9c-4.71-2-9.58-3.61-14.37-5.41-4-1.52-7.94-3.65-12.1-4.45s-7.25-3.6-11.11-4.89c-4.08-1.37-7.89-3.5-11.8-5.37q-6.36-3-12.7-6.07-6.72-3.21-13.44-6.42l-8.35-4c-6.86-3.29-13.71-6.58-20.66-9.69C52.48,93.26,43,89.49,33.6,85.5c-5.37-2.29-10.52-5.22-16.06-6.87a20.79,20.79,0,0,1-11-7.11C3,67-.81,62.22.15,55.71c.55-3.8,2.47-6.51,6.28-7.38,8.14-1.85,16.33-3.43,24.45-5.3,2.7-.63,5.23-1.9,7.89-2.7q10.35-3.09,20.75-6c4-1.11,8-2.13,12-3.08a38.42,38.42,0,0,1,4.18-.44c.75-.08,1.81,0,2.16-.44,2.86-3.61,7.34-3.67,11.12-5.11C94,23.37,99.07,22,104.17,20.54c2.77-.78,5.69-1,8.48-1.77,6.47-1.74,12.87-3.83,19.38-5.41,2.3-.56,4.64-1.12,7-1.58a62.48,62.48,0,0,1,8.56-1.19,102.37,102.37,0,0,1,33.5,3.82c1.56.42,3.13.88,4.68,1.36,2.95.91,5.8,2.1,8.72,3.1,6.67,2.31,11.1,7,14,13.26a8.68,8.68,0,0,1,.81,5.34c-.77,2.91,1.13,5.23,1.06,7.92,0,.39.63.79,1.75,1,0-2.68.08-5.37,0-8-.26-7.65,1.93-14.41,7.82-19.45,3.37-2.9,7-5.68,11.65-6.52a13.71,13.71,0,0,0,5.3-2.3,39.21,39.21,0,0,1,4.51-2.76c6.31-3.31,13.23-4.83,20.31-6.11A84,84,0,0,1,291,1.35c1.31.22,2.63.38,4,.49a95.49,95.49,0,0,0,12.2.07c9.71-.4,19.46-.5,28.81,2.12,4.34,1.21,8.36,0,12.47.55,10,1.35,20,2.75,29.94,4.3q11.37,1.77,22.66,4a133.18,133.18,0,0,1,13.68,3.37C419.64,17.73,421.51,24.39,419.63,29.18Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 220, y: 380 },
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