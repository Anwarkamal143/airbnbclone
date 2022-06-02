import { MarkerSVG } from "@assets"
import { getCenter } from "geolib"
import { ReactElement, useEffect, useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"

interface Props {
    className?: string
    searchResults?: any[]
}

export default function Map({ className, searchResults }: Props): ReactElement {
    const [selectedLocation, setSelectedLocation] = useState<
        Record<string, any>
    >({})
    const coordinates = searchResults?.map((item: Record<string, any>) => ({
        longitude: item.long,
        latitude: item.lat,
    }))
    const center: { latitude: number; longitude: number } = getCenter(
        coordinates || []
    ) || { latitude: 37.7577, longitude: -122.4376 }
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })
    useEffect(() => {
        const element = document.getElementById(selectedLocation.id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
            setTimeout(() => {
                element.classList.add("shadow-lg")
            }, 300)
            setTimeout(() => {
                element.classList.remove("shadow-lg")
            }, 1000)
        }
    }, [selectedLocation])
    return (
        <ReactMapGL
            className={className}
            mapStyle="mapbox://styles/anwarkamal/ckt385jzm02c018loben9twbs"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport: any) => setViewport(nextViewport)}>
            {searchResults?.map((item: Record<string, any>) => (
                <div key={item.long}>
                    <Marker
                        longitude={item.long}
                        latitude={item.lat}
                        offsetLeft={-20}
                        offsetTop={-20}>
                        <p
                            role="img"
                            aria-label="marker"
                            onClick={() => setSelectedLocation(item)}
                            className="text-2xl cursor-pointer animate-bounce">
                            <MarkerSVG />
                        </p>
                    </Marker>
                    {/* Popup on click of a mark */}
                    {selectedLocation.id === item.id ? (
                        <Popup
                            closeOnClick={true}
                            onClose={() => setSelectedLocation({})}
                            latitude={item.lat}
                            longitude={item.long}>
                            <div className="">{item.title}</div>
                        </Popup>
                    ) : null}
                </div>
            ))}
        </ReactMapGL>
    )
}
