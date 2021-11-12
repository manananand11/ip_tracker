import "./input.css"

export default function Input() {
    return (
        <div className="inputContainer">
            <input placeholder="Search for any IP address or domain" className="ipInput" />
            <button className="inputButton">
                <img src="/assets/icons/icon-arrow.svg" alt="" />
            </button>
        </div>
    )
}
