import { Marker } from "@react-google-maps/api";

const BellyFill = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M394.52,47.47c-6.18-1.3-15.57-3.33-27-6-10.58-2.48-23.76-6.46-40-10-39.95-8.73-39-14.95-52.5-12.5-16.72,3-22,13.67-37,11-8.7-1.55-9.76-5.77-20-10-18.41-7.61-35.1,2.14-60.5,9.5a234.48,234.48,0,0,1-60,9c8.61,11.67,17.45,17.15,24,20,13.84,6,18.5.73,37,8,4.08,1.6,9.87,4.22,24.41,10,5,2,4.95,1.93,6.09,2.46,8,3.67,15.62,7,22,15,7,8.73,8.71,18.15,10.5,28.5,3.33,19.24.68,32.79,2,33,2.74.42,11.83-52.5,16-52,1,.12,1.29,3.33,3,25,1.63,20.59,2.18,27.87,6,37s9,15.48,10,15c2-.94-5.55-16.82-7-42-1-16.55,1.49-24,4-29a68.74,68.74,0,0,1,10-14,81.45,81.45,0,0,1,12-11,34.25,34.25,0,0,1,8-8c3.39-2.41,8.77-5.29,22-7,10.09-1.31,12.13-.31,21-1,9.88-.78,16.65-2.68,28-6A226.87,226.87,0,0,0,394.52,47.47Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.12,
          strokeWeight: 0,
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

export default BellyFill;
