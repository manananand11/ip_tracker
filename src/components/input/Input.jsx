import "./input.css"
import React, { useState } from 'react';

export default function Input(props) {

    const [ip, setIp] = useState('');
    // setIp();
    // console.log()

    function submit() {
        props.setInputIp(ip);
    }
    function updateIp(event) {
        setIp(event.target.value)
        console.log(ip)
    }
    return (
        <div className="inputContainer">
            <input onChange={updateIp} placeholder="Search for any IP address or domain" value={ip} className="ipInput" />
            <button onClick={submit} className="inputButton">
                <img src="/assets/icons/icon-arrow.svg" alt="" />
            </button>
        </div>
    )
}
