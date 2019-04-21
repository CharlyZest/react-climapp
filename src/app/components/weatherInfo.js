import React from 'react';

const WeatherInfo = props => {

    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger mt-4">
                    <p> { props.error } </p>
                </div>
            }
            {
                props.temp ?
                <div className="card card-body">
                    <p>
                        Ubicacion: { props.ciudad } / { props.pais }
                    </p>

                    <p>
                        Temperatura: { props.temp } °C, { props.desc }
                    </p>

                    <p>
                        Humedad: { props.humedad } %
                    </p>

                    <p>
                        Viento: { props.viento } Km/H
                    </p>

                </div>
                :
                <div className="">
                </div>
            }

        </div>
    )

}

export default WeatherInfo;
