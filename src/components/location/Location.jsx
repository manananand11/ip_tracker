import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './location.css'

export default function Location() {
    return (
        <div className="locationContainer">
        <MapContainer center={[28.5834, 77.1681]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.5834, 77.1681]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}
