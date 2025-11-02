"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./map.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-icon-2x.png",
});

export default function Map({ position, center }) {
  return (
    <div>
      <MapContainer
        className={styles.map}
        center={center}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>موقعیت ما</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
