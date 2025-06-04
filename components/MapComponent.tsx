'use client'

import * as React from 'react'
import { Map, Marker } from '@vis.gl/react-maplibre'
import { useTheme } from 'next-themes'
import type { Map as MaplibreMap } from 'maplibre-gl' // Import MaplibreMap type

// Access the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY

const lightMapStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`
const darkMapStyle = `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${API_KEY}`

const MemLibCoordinates = {
  longitude: -89.397987,
  latitude: 43.07539,
}

const TARGET_ZOOM = 11
const INITIAL_ZOOM = 2

export default function MapComponent() {
  const { resolvedTheme } = useTheme()
  const [currentMapStyle, setCurrentMapStyle] = React.useState(lightMapStyle)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      setCurrentMapStyle(resolvedTheme === 'dark' ? darkMapStyle : lightMapStyle)
    }
  }, [resolvedTheme, mounted])

  const handleMapLoad = React.useCallback((event: { target: MaplibreMap }) => {
    const map = event.target

    setTimeout(() => {
      map.flyTo({
        center: [MemLibCoordinates.longitude, MemLibCoordinates.latitude],
        zoom: TARGET_ZOOM,
        speed: 0.9,
        curve: 1.6,
        essential: true,
      })
    }, 500) // delay
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Map
      initialViewState={{
        longitude: MemLibCoordinates.longitude,
        latitude: MemLibCoordinates.latitude,
        zoom: INITIAL_ZOOM,
      }}
      style={{ width: '100%', height: '400px', border: 'none' }}
      mapStyle={currentMapStyle}
      attributionControl={false}
      onLoad={handleMapLoad} // Add the onLoad handler
    >
      <Marker longitude={MemLibCoordinates.longitude} latitude={MemLibCoordinates.latitude}>
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500"></span>
        </span>
      </Marker>
    </Map>
  )
}
