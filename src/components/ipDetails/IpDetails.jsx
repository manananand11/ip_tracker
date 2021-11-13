import React from 'react'
import './ipDetails.css'

export default function IpDetails(props) {
    console.log("props " + props.IpDetails  )
    return (
        <div className="ipDetailsContainer">
            <div className="info right-border">
                <p className="infoTitle">IP ADDRESS</p>
                <p className="infoValue">{props.ip}</p>
            </div>
            <div className="info right-border">
                <p className="infoTitle">LOCATION</p>
                <p className="infoValue">random</p>
            </div>
            <div className="info right-border">
                <p className="infoTitle">TIMEZONE</p>
                <p className="infoValue">random</p>
            </div>
            <div className="info">
                <p className="infoTitle">ISP</p>
                <p className="infoValue">random</p>
            </div>
        </div>
    )
}
