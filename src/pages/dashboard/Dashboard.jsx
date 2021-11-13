import "./dashboard.css"
import Input from '../../components/input/Input'
import Location from "../../components/location/Location"
import IpDetails from "../../components/ipDetails/IpDetails"
import IpSearch from "../../components/ipSearch/IpSearch";
import React, { useState } from 'react';

export default function Dashboard() {

    const [inputIp, setInputIp] = useState('');
    

    return (
        <div className="dashboardContainer">
            <div className="dashboardTop">
                <h1 className="dashboardHeading">IP Address Tracker</h1>
                <Input setInputIp={setInputIp} />
            </div>
            <div className="dashboardMiddle">
                <IpSearch inputIp={inputIp}/>
            </div>
            <div className="dashboardBottom">
                <Location />
            </div>

        </div>
    )
}
