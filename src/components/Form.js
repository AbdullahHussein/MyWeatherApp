import React from "react"

const Form = props => {
    return (
        <form onSubmit={props.getWeather} className="form">
            <input type="text" name="city" placeholder=" City..." className="inputs"/><br/><br/>
            <input type="text" name="country" placeholder=" Country..." className="inputs"/><br/>
            <button className="btn">Get Weather</button>
        </form>
    )
}
export default Form