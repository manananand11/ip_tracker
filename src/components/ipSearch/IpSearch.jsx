
import IpDetails from '../ipDetails/IpDetails'
import './ipSearch.css'
import React, { useState, useEffect } from 'react';
var http = require('http');

export default function IpSearch(props) {

    const [ipDetails, setIpDetails] = useState(false);
    const [loading, setLoading] = useState("LOADING...")

    var ip = props.inputIp;
    var api_key = process.env.REACT_APP_GEO_API;
    var api_url = 'https://geo.ipify.org/api/v1?';

    var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
    // getDetails();
    useEffect(() => {
        http.get(url, function (response) {
            var str = '';
            response.on('data', function (chunk) { str += chunk; });
            response.on('end', function () {
                var string = JSON.parse(str);
                setIpDetails(string);
                props.setSearchIpDetails(string);
                
            });

            
        }).end();
    }, [props.inputIp]);
    return (
        <div>
            {ipDetails ? <IpDetails ipDetails={ipDetails} /> : <IpDetails loading={loading} />}



        </div>
    )
}
