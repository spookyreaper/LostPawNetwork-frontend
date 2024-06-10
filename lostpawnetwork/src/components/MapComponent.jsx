import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';

// Fix for missing icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const UpdateMapView = ({ userLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (userLocation) {
      console.log('Updating map view to user location:', userLocation);
      map.setView(userLocation, 13);
    }
  }, [userLocation, map]);

  return null;
};

const MapComponent = ({ reports }) => {
  const [userLocation, setUserLocation] = useState(null);
  const nycCoordinates = [40.7128, -74.0060]; // NYC coordinates

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('User location:', { latitude, longitude });
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={nycCoordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {reports.map((report) => (
          <Marker key={report.id} position={[report.latitude, report.longitude]}>
            <Popup>
              <div>
                <h3>{report.pet?.name || report.petName || 'No pet name'}</h3>
                <p>{report.description}</p>
                <p><strong>Status:</strong> {report.status}</p>
                <div>
                  {report.photoUrls && report.photoUrls.length > 0 ? (
                    report.photoUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url.startsWith('http') ? url : `http://localhost:1337${url}`}
                        alt={`Report ${report.id}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = 'default-image-url'; e.target.alt = 'Default Image'; }}
                      />
                    ))
                  ) : (
                    <p>No photos available</p>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        {userLocation && (
          <Circle
            center={userLocation}
            radius={100}
            pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
          />
        )}
        <UpdateMapView userLocation={userLocation} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
