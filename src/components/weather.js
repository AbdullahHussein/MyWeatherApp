import React from "react"

const Weather = props => {
    return (
        <div className="weather-div">
            {props.text && <p className="output">Weather...</p>}
            {props.city && props.country && <p className="output">Location: {props.city}, {props.country}</p>}
            {props.temp && <p className="output">Temperature: {props.temp} °C</p>}
            {props.humidity && <p className="output">Humidity: {props.humidity}%</p>}
            {props.description && <p className="output">Conditions: {props.description}..</p>}
        </div>
    )
}
export default Weather