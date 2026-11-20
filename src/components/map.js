'use client';

import { useEffect, useRef } from 'react';

export default function Map({ lat, lng }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function initializeMap() {
      const { LeafletMap, TileLayer, Marker } = await import('leaflet');

      if (cancelled || !containerRef.current || mapRef.current) {
        return;
      }

      const center = [lat, lng];

      const map = new LeafletMap(containerRef.current).setView(center, 13);

      mapRef.current = map;

      new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    }

    initializeMap();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 13);
    }
  }, [lat, lng]);

  return <div ref={containerRef} className='h-full w-full' />;
}
