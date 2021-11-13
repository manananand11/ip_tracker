import React from 'react'
import './ipDetails.css'

export default function IpDetails(props) {
    console.log("props " + props.ipDetails?.ip)
    // console.log(props.ipDetails + "idk") ;
    return (

        props.ipDetails ? (
            <div className="ipDetailsContainer">
                <div className="info right-border">
                    <p className="infoTitle">IP ADDRESS</p>
                    <p className="infoValue">{props.ipDetails?.ip}</p>
                </div>
                <div className="info right-border">
                    <p className="infoTitle">LOCATION</p>
                    <p className="infoValue">{props.ipDetails?.location?.region}</p>
                </div>
                <div className="info right-border">
                    <p className="infoTitle">TIMEZONE</p>
                    <p className="infoValue">{props.ipDetails?.location?.timezone}</p>
                </div>
                <div className="info">
                    <p className="infoTitle">ISP</p>
                    <p className="infoValue">{props.ipDetails?.isp}</p>
                </div>
            </div>
        ) :
            <div className="ipDetailsContainer">
                <div className="loadingContainer">{props.loading}</div>
            </div>
    )
}
