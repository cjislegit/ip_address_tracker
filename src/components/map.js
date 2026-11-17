'use client';

import { useEffect, useRef } from 'react';

export default function Map() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function initializeMap() {
      const { LeafletMap, TileLayer, Marker } = await import('leaflet');

      if (cancelled || !containerRef.current || mapRef.current) {
        return;
      }

      const center = [34.0522, -118.2437];

      const map = new LeafletMap(containerRef.current).setView(center, 13);

      mapRef.current = map;

      new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      //Request the user's location
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (cancelled) return;

          const { latitude, longitude } = position.coords;
          const userLocation = [latitude, longitude];

          new Marker(userLocation)
            .addTo(map)
            .bindPopup('<strong>You are here</strong>')
            .openPopup();
          map.setView(userLocation, 13);
        });
      }
    }

    initializeMap();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className='h-full w-full' />;
}
