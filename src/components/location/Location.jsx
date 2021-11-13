import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './location.css'
import { useState, useEffect } from 'react'
import Leaflet from 'leaflet'
import { useMap } from 'react-leaflet'
export default function Location(props) {

    const [latlong, setlatlong] = useState([props.searchIpDetails.location.lat, props.searchIpDetails.location.lng])

    useEffect(() => {
        setlatlong([props.searchIpDetails.location.lat, props.searchIpDetails.location.lng]);
    }, [props.searchIpDetails]);

    function Fly() {
        const map = useMap();
        map.flyTo(new Leaflet.LatLng(latlong[0], [latlong[1]]), 10);
        return null;
    }

    console.log("inlocation" + latlong)
    return (
        <div className="locationContainer">
            <MapContainer center={latlong} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Fly />
                <Marker position={latlong}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
