import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ item }) => {
  const coord = [
    isNaN(item.address.geo.lat) ? "43.34" : item.address.geo.lat,
    isNaN(item.address.geo.lng) ? "-43.34" : item.address.geo.lng,
  ];
  console.log(isNaN(item.address.geo.lat));
  return (
    <MapContainer
      center={coord}
      zoom={10}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={coord}>
        <Popup>{item.address.city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
