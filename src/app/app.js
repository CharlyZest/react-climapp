import React, { Component } from 'react';
import WeatherInfo from './components/weatherInfo';
import WeatherForm from './components/weatherForm';
import { WEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temp: '',
        desc: '',
        humedad: '',
        viento: '',
        ciudad: '',
        pais: '',
        error: null
    };

    getWeather = async e => {

        e.preventDefault();

        const { city, country } = e.target.elements;

        const cityValue = city.value, countryValue = country.value;

        if ( cityValue || countryValue ) {

            if ( countryValue ) {
                const  API_URI = `https://api.openweathermap.org/data/2.5/weather?q=${ cityValue },${ countryValue }&appid=${ WEATHER_KEY }&units=metric&lang=es`;

                const resp = await fetch(API_URI);
                const data = await resp.json();

                console.log(data)

                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    humedad: data.main.humidity,
                    viento: data.wind.speed,
                    ciudad: data.name,
                    pais: data.sys.country,
                    error: null
                })
            } else {
                const  API_URI = `https://api.openweathermap.org/data/2.5/weather?q=${ cityValue }&appid=${ WEATHER_KEY }&units=metric&lang=es`;

                const resp = await fetch(API_URI);
                const data = await resp.json();

                console.log(data)

                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    humedad: data.main.humidity,
                    viento: data.wind.speed,
                    ciudad: data.name,
                    pais: data.sys.country,
                    error: null
                })
            }

        } else {

            this.setState({
                error: 'Por favor ingrese una ciudad y un país'
            })

        }

    }

    render() {

        return (

            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto weather-app">
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo {...this.state} />
                    </div>
                </div>
            </div>

        )

    }

}

export default App;
