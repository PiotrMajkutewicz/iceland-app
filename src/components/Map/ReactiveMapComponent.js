import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ReactiveMapComponent = ({
  mapStatus = true,
  center = [51.505, -0.09],
  marker = [],
  zoom = 6,
  scrollWheelZoom = false,
  station,
}) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current && mapStatus) {
      mapRef.current.flyTo(center, 16, { animate: true, duration: 3 });
    }
  }, [mapStatus, center, zoom]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: mapStatus ? "block" : "none",
      }}
    >
      <MapContainer
        ref={mapRef}
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker.length && (
          <Marker position={marker}>
            <Popup>{`${station.name} (${station.company})`}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default ReactiveMapComponent;
