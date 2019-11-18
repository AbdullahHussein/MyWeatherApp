import React, {Component} from "react"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/weather"
import "./App.css"

const API_KEY = "0f49897bfed4a476f7ef2d835b3ed646"

class App extends Component{
  state = {
    text: true,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async event => {
    event.preventDefault()
    const City = event.target.elements.city.value
    const Country = event.target.elements.country.value

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      text: false,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: undefined
    })
  }
  render(){
    return(
      <div className="mainDiv">
        <Titles/>
        <Weather
        text={this.state.text}
        temp={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description= {this.state.description}
        />
        <Form getWeather={this.getWeather}/>
        </div>
    )
  }
}
export default App