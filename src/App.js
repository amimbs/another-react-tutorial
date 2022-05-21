import { useState } from 'react';
import './App.css';
//hooks
import useRequest from './hooks/useRequest';

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//components
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {

  const [searchResults, setSearchResults] = useState('Atlanta')
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=no&alerts=no`

  
  const { data } = useRequest(url)
  return (
    <div className="App">
      <ToastContainer />
      <h2 style={{margin: "30px 0px"}}>Weather App</h2>
      {Object.keys(data).length !== 0 && (
        <>
          <Search setSearchResults={setSearchResults} />
          <CurrentWeather data={data} />
          <Forecast data={data} />
        </>
      )}

    </div>
  );
}

export default App;
