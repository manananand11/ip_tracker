import "./dashboard.css"
import Input from '../../components/input/Input'
import Location from "../../components/location/Location"

export default function Dashboard() {
    return (
        <div className="dashboardContainer">
            <div className="dashboardTop">
            <h1 className="dashboardHeading">IP Address Tracker</h1>
            <Input />
            </div>
            <div className="dashboardMiddle">

            </div>
            <div className="dashboardBottom">
            <Location />
            </div>
            
        </div>
    )
}
