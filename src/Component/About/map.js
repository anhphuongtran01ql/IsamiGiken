import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./about.css";

function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='キーボード ショートカット 地図データ ©2023; <a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">利用規約</a> <a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">地図の誤りを報告する</a>'
      />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
}

export default Map;
