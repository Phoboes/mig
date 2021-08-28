import { Marker } from "@react-google-maps/api";

const BellyFill = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M246.75,152.87a121.6,121.6,0,0,1-27,55c-17,30.52-21.88,36.54-23,36-2.33-1.12,8-32.25,20-59,4.1-9.17,7.91-16.72,11-29a133.51,133.51,0,0,0,4-31c.1-8.53-1.32-14.58-6-19-5.68-5.37-12.75-3.82-14-8-.46,1.69-7.89-.8-11,3-3.75,4.59,3.88,12.06,3,23a13.74,13.74,0,0,1-.48,2.79c-2.92,10-9.5,16.39-12.52,19.21-5.17,4.83-11.92,12.66-19,26l.36.42a22.86,22.86,0,0,1,13.64,15.58c2,8.52-2,15.44-3,17a66.7,66.7,0,0,1-56,36l41-70c.74.17,1.48.37,2.2.6a20.11,20.11,0,0,0-2.2-14.6,20.86,20.86,0,0,0-12-9,513.16,513.16,0,0,1-95-81c-9.89-10.79-18.86-21.51-27-32,5.59,1.67,13.9,4.12,24,7,28.27,8.06,44.63,12.14,55,15,26.16,7.21,31.41,12.18,70,26,8.26,3,20.64,7.25,36,12a25.94,25.94,0,0,1,1-10c1.56-5.07,6-12.57,12.27-14a2.23,2.23,0,0,1,.73,0c4.36.28,8.14,8.39,10,19A121.7,121.7,0,0,1,246.75,152.87Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 200, y: 370 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default BellyFill;
