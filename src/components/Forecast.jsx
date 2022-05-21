import React from "react";
import styled from "styled-components";
import moment from "moment";

export default function Forecast({ data }) {
    const currentWeather = data.forecast.forecastday[0].hour
    return (
        <StyledForecast>
            <h2>
                Current Weather
            </h2>
            <div className="box-shadow current-forecast">
                {currentWeather.map((weather) => (
                    <div key={weather.time_epoch} className='card box-shadow'>
                        <span>{moment(weather.time).format('h:mm:ss a')}</span>
                        <img src={weather.condition.icon} alt='icon' />
                        <p>{weather.temp_f}°F</p>
                    </div>
                ))}
            </div>

            <h2>Future Forecast</h2>
            {data.forecast.forecastday.map((futureWeather) => (
                <div key={futureWeather.date_epoch} className="future-forecast">
                    <div className="box-shadow current-forecast">
                        {futureWeather.hour.map((weather) => (
                            <div key={weather.time_epoch} className='card box-shadow'>
                                <span>{moment(weather.time).format('h:mm:ss a')}</span>
                                <img src={weather.condition.icon} alt='icon' />
                                <p>{weather.temp_f}°F</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </StyledForecast>
    );
}

const StyledForecast = styled.div`
    margin-top: 40px;
    h2{
        margin: 20px 0;
    }
    .current-forecast{
        display: flex;
        overflow-y: hidden;
        padding: 20px;
        .card{
            padding: 10px;
            margin-right: 20px;
            display: flex;
            flex-direction: column;
            align-itmes: center;
            background-color: #303134;
            color: white;

            span {
                font-size: .9rem;
                text-align: center;
            }
        }
    }

    .future-forecast {
        margin: 20px 0;
    }
`;