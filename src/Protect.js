import './Protect.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { IoDiamond } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdCleaningServices } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";
import L from 'leaflet';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype_getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow
})

function Protect(){
    const [pos, setPos] = useState([40.782353, -73.965269])


    return(
        <div className='main-protect'>
            <MapContainer center={pos} zoom={13} scrollWheelZoom={false}  style={{ width: '100%', height: '600px', display: 'inline' }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={pos}>
                <Popup>
                    Current Location
                </Popup>
                </Marker>
            </MapContainer>
            <div className="tab-protect">
                <h1 style={{ margin: "10px" }}>Current Location Stats</h1>
                <ul className='list-protect'>
                    <li>Recent Crime: 23</li>
                    <li>Recent Covid-19: 1291</li>
                </ul>
            </div>
            <div className='bar'>
                <IconContext.Provider value={{ size: '50px' }}>
                <Link to="/clean"><MdCleaningServices /></Link>
                <Link to="/"><IoDiamond /></Link>
                <BiShieldQuarter />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Protect;