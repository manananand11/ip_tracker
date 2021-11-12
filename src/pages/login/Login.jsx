import React, { useEffect } from 'react'
import Sawo from 'sawo'

const Login = () => {
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: 'c7a39dd4-cf2d-45b7-ab17-4f47dec131fa',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div>
            <div id="sawo-container" style={{height:"300px", width:"400px"}}></div>
        </div>
    )
}

export default Login