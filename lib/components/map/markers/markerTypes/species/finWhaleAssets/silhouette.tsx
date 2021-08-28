import { Marker } from "@react-google-maps/api";

const Silhouette = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M481.18,44.47c-.91-3.31-5.6-4.93-7.14-5a78,78,0,0,1-8.1-.19c-10.83-1.43-21.33-4.4-31.87-7.22-10.95-2.93-21.72-6.58-32.86-8.86-11.71-2.39-23.45-4.67-35.16-7.08l-6.93-1.45c-7-1.48-13.88-3.66-20.86-4.71l-5.52-.83c-6.83-1-13.68-2.09-20.53-3C299,4.42,285.82,2.36,272.47,3.28c-7.81.54-15.71,1.72-21.35,8.1-2.18,2.46-5.69,4-5.92,7.95a7.88,7.88,0,0,1-.37,1.85c-.61,1.32-1.13,3.16-2.7,3.19s-2.64-1.51-3-3.2a2.45,2.45,0,0,0-.24-.58h0a4.49,4.49,0,0,0-1.49-5.11c-1-1-.46-3-2.36-3.26-2.3-5-6.39-7.89-11.42-9.68C210.81-2,197.67,1,184.69.87a58.47,58.47,0,0,0-8,.74c-7,.92-14,2-21,2.87-6.35.79-12.66,1.92-18.9,3.19L135.2,8c-8.32,1.71-16.59,3.82-24.91,5.66l-8.13,1.77C83.76,19.37,65.32,23.12,47.38,29a190.61,190.61,0,0,1-29.84,7.53c-4.08.62-8.17-.1-12.22.81A6.26,6.26,0,0,0,.11,42.39c-.47,2.38.57,4.53,2.7,6.12a31.73,31.73,0,0,0,16.63,6.43c7.81.68,15.6,1.56,23.42,2.15,12.22.94,24.38,2.64,36.48,4.79l5.69,1c7.89,1.42,15.76,2.92,23.6,4.6q4.78,1,9.55,2.14c11.7,2.76,23.41,5.61,35.16,8,9.84,2,19.57,4.51,29.48,6.18.59.74,1.48.74,2.31,1a59.62,59.62,0,0,1,9.45,3c4.83,2.2,7.91,6,10.92,10.19,3.7,5.13,7.73,10,9.85,16.09.82,3.93-.92,7.85,0,11.78-1.37,5.46-.92,11-.62,16.54.14,2.57.21,9.19.46,9.91a1.74,1.74,0,0,0,.11.25,8.77,8.77,0,0,1,.06,1.75c-.05,3-.08,5.92-.16,8.89,0,1.08.21,8.19.26,9.27-.18,2.36-9.23,31-13.25,41.06a128,128,0,0,0,32,4,127,127,0,0,0,44.51-8l-.14-.06c-10.67-18-15.63-26.29-15.83-26.51a.4.4,0,0,0-.11-.13c-.81-.65-5.58-15.89-5.26-15.88-.62-.19-1.18-3.76-1.26-4.24-.63-4.26-.65-8.57-1.44-12.83a33,33,0,0,1,.87-14.73c.63-2.32,1.61-5,1-7.12-1.17-4.35.9-8.12,1.76-11.91.55-2.48,2.33-5.23,3.69-7.79,1.79-3.34,4.46-6,6.71-9s4.29-6.87,9.14-6.66c.5,0,1-.75,1.54-1.11a44.27,44.27,0,0,1,24.41-8.33c6.4-.23,12.82-.8,18.91-3.3a37.3,37.3,0,0,1,10.37-2.35,161.26,161.26,0,0,0,24.32-4.93l3-.52a165.43,165.43,0,0,0,21.69-5.34c.42-.14.85-.27,1.27-.39a36.83,36.83,0,0,1,11.13-1.7,58.65,58.65,0,0,0,10-.81c6-1,12.05-2,18.17-2.38,6.77-.41,13.49-1.33,20.29-1.59,5.21-.2,10.4-1.05,15.61-1.59C471,57,474.69,55.14,477.62,52.24,478.58,51.29,482.1,47.81,481.18,44.47ZM220.59,11.31h0Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.11,
          strokeWeight: 2,
          strokeColor: "rgba(255,255,255, 0.2)",
          anchor: { x: 240, y: 310 },
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
