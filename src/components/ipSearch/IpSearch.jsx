import React from 'react'
import IpDetails from '../ipDetails/IpDetails'
import './ipSearch.css'
var http = require('http');

export default function IpSearch(props) {
    var ip = props.inputIp;
    var api_key = process.env.REACT_APP_GEO_API;
    var api_url = 'https://geo.ipify.org/api/v1?';

    var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

    http.get(url, function (response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });
        response.on('end', function () { console.log(str); });
    }).end();
    return (
        <div>
            <IpDetails str={str}/>
        </div>
    )
}
