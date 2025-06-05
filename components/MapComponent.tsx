'use client'

import * as React from 'react'
import { Map, Marker } from '@vis.gl/react-maplibre'
import { useTheme } from 'next-themes'
import type { Map as MaplibreMap } from 'maplibre-gl' // Import MaplibreMap type
import LocationDropdown from './LocationDropdown' // Import the dropdown

// Access the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY

const lightMapStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`
const darkMapStyle = `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${API_KEY}`

const locationsData = {
  home: {
    label: 'Home',
    longitude: 106.9158, // Example, replace with actual Home longitude
    latitude: 47.8858, // Example, replace with actual Home latitude
  },
  school: {
    label: 'School',
    longitude: -89.397987,
    latitude: 43.07539,
  },
}

const TARGET_ZOOM = 10
const INITIAL_ZOOM = 2

export default function MapComponent() {
  const { resolvedTheme } = useTheme()
  const [currentMapStyle, setCurrentMapStyle] = React.useState(lightMapStyle)
  const [mounted, setMounted] = React.useState(false)
  const mapRef = React.useRef<MaplibreMap | null>(null) // Ref for map instance

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      setCurrentMapStyle(resolvedTheme === 'dark' ? darkMapStyle : lightMapStyle)
    }
  }, [resolvedTheme, mounted])

  const handleMapLoad = React.useCallback((event: { target: MaplibreMap }) => {
    mapRef.current = event.target // Store map instance
    const map = event.target
    setTimeout(() => {
      map.flyTo({
        center: [locationsData.school.longitude, locationsData.school.latitude],
        zoom: TARGET_ZOOM,
        speed: 1.2,
        curve: 1.6,
        essential: true,
      })
    }, 500) // delay
  }, [])

  const handleSelectLocation = (locationKey: 'home' | 'school') => {
    if (!mapRef.current) return

    const selectedLocation = locationsData[locationKey]
    mapRef.current.flyTo({
      center: [selectedLocation.longitude, selectedLocation.latitude],
      zoom: TARGET_ZOOM,
      speed: 1.6,
      curve: 1.2,
      essential: true,
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Map
        initialViewState={{
          longitude: locationsData.school.longitude,
          latitude: locationsData.school.latitude,
          zoom: INITIAL_ZOOM,
        }}
        style={{ width: '100%', height: '100%', border: 'none' }}
        mapStyle={currentMapStyle}
        attributionControl={false}
        onLoad={handleMapLoad} // Add the onLoad handler
      >
        <Marker longitude={locationsData.school.longitude} latitude={locationsData.school.latitude}>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-5 w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            </div>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
          </div>
        </Marker>

        <Marker longitude={locationsData.home.longitude} latitude={locationsData.home.latitude}>
          <span className="relative flex h-3 w-3">
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </span>
        </Marker>
      </Map>
      <LocationDropdown onSelectLocation={handleSelectLocation} />
    </div>
  )
}
