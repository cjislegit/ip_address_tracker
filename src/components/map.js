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

      new Marker(center)
        .addTo(map)
        .bindPopup('<strong>Los Angeles</strong>')
        .openPopup();
    }

    initializeMap();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} style={{ height: '500px', width: '100%' }} />;
}
