
import IpDetails from '../ipDetails/IpDetails'
import './ipSearch.css'
import React, { useState } from 'react';
var http = require('http');

export default function IpSearch(props) {

    const [ipDetails, setIpDetails] = useState(false);
    const [loading,setLoading]=useState("LOADING...")

    var ip = props.inputIp;
    var api_key = process.env.REACT_APP_GEO_API;
    var api_url = 'https://geo.ipify.org/api/v1?';

    var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

    http.get(url, function (response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });
        response.on('end', function () { console.log(str); });
        setIpDetails(str);
    }).end();
    return (
        <div>
            <IpDetails ipDetails={ipDetails}/>
        </div>
    )
}
