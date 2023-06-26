import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./about.css";

function Map() {
  return (
    <MapContainer
      center={[34.7909919, 135.4779044]}
      zoom={13}
      style={{ height: "30vw", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='キーボード ショートカット 地図データ ©2023; <a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">利用規約</a> <a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">地図の誤りを報告する</a>'
      />
      <Marker position={[34.7909919, 135.4779044]}></Marker>
    </MapContainer>
  );
}

export default Map;
