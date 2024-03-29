import React from 'react';
import MapContainer from './MapContainer'
import 'leaflet/dist/leaflet.css';

interface MapProps {
  location: { lat: number; lng: number };
}

const Map: React.FC<MapProps> = ({ location }) => {
  const defaultCenter = { lat: 51.505, lng: -0.09 }; // デフォルトの中心座標
  const center = location || defaultCenter;

  return (
    <div>
      <MapContainer center={center} zoom={5} position={location} />
    </div>
  );
};

export default Map;
