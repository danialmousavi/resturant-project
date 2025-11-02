"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./map.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// اصلاح کامل آیکون Marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

export default function Map({ position, center, children }) {
  return (
    <div style={{ position: "relative" }}>
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

      {/* اگر اطلاعات تماس بخواهید کنار یا روی نقشه نمایش دهید */}
      {children && <div className={styles.details}>{children}</div>}
    </div>
  );
}
