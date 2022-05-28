import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const OurLocation = () => {
  const position = [23.777176, 90.399452];

  return (
    <div id="map">
      <div class="divider"></div>

      <h2 className="mb-12 text-center text-3xl lg:text-4xl my-8 font-bold text-warning uppercase">
        our location
      </h2>
      <MapContainer
        style={{ height: "500px" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span className="font-semibold text-2xl"> TOOLS GARDEN</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OurLocation;
