import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef, {
      center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
      zoom: 8,
    });

    // Create markers
    const markers = [
      {
        position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        title: 'San Francisco',
      },
      {
        position: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        title: 'Los Angeles',
      },
      {
        position: { lat: 40.7128, lng: -74.0060 }, // New York
        title: 'New York',
      },
    ];

    // Add markers to the map
    markers.forEach((marker) => {
      new window.google.maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title,
      });
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default GoogleMap;
