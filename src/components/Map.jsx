import React from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { Icon, Browser } from 'leaflet';

const dragg = !Browser.mobile

export const Map = () => {
  return (
    <MapContainer
      center={[5.34014,-72.40068]}
      zoom={18}
      dragging={dragg}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[5.34014,-72.40068]}
      >
        <Popup>
          FABIAN TAMAYO ABOGADOS <br /> ED. San Miguel  - Oficina 301
        </Popup>
      </Marker>
    </MapContainer>
  )
}
