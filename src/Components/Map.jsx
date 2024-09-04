import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import pinIcon from "../assets/images/icon-location.svg"

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: pinIcon,
  shadowUrl: markerShadow,
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ location }) {
  const { lat, lng } = location;

  if (!lat || !lng) {
    return null; // Return nothing if lat or lng are not valid
  }

  return (
    <MapContainer className='absolute bottom-0'
      key={`${lat}-${lng}`}
      center={[lat, lng]}
      zoom={13}
      style={{ height: "68vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          IP Location: {lat}, {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
