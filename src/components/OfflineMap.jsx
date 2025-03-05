import React, { useRef, useCallback, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import locationImg from "../assets/location-svgrepo-com.png";

// Custom Marker Icon (Orange #E97C3B and Small Size)
const customIcon = new L.Icon({
  iconUrl: locationImg, // Default marker image
  iconSize: [25, 25], // Smaller size
  iconAnchor: [12, 25], // Adjust anchor position
  popupAnchor: [0, -25], // Adjust popup position
});

export default function OfflineMap() {
  const locations = [
    { id: 1, name: "Location 1", coords: [8.79972454418745, 78.15667809435473] },
    { id: 2, name: "Location 2", coords: [51.515, -0.1] },
    { id: 3, name: "Location 3", coords: [51.525, -0.08] },
  ];

  const defaultCenter = [0, -0];
  const defaultZoom = 1.5;

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(defaultCenter, defaultZoom);
    }
 
  }, []);

  const handleMarkerClick = useCallback((coords) => {
    if (mapRef.current) {
      mapRef.current.setView(coords, 10);
    }
  }, []);

  const resetMap = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setView(defaultCenter, defaultZoom);
    }
  }, []);

  function SetMapView({ center, zoom }) {
    const map = useMap();
    mapRef.current = map;
    return null;
  }

  return (
    <div className="relative h-[500px] w-1/2">
      {/* Reset Button */}
      <button
        onClick={resetMap}
        className="absolute top-4 right-4 bg-primary text-white shadow-md z-[999] cursor-pointer pointer-events-auto btn"
      >
        Reset
      </button>

      {/* Map */}
      <MapContainer center={defaultCenter} zoom={defaultZoom} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* Assign map reference */}
        <SetMapView center={defaultCenter} zoom={defaultZoom} />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coords}
            icon={customIcon}
            eventHandlers={{ click: () => handleMarkerClick(location.coords) }}
          >
            <Popup>
              <p>{location.name}</p>
              <p>Lat: {location.coords[0]}</p>
              <p>Lng: {location.coords[1]}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
