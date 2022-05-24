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

  const [searchResults, setSearchResults] = useState('')

  // returing loading and data, deconstructuring the useRequest object 
  const { data, loading } = useRequest(searchResults)

  const body = Object.keys(data).length !== 0 && (
    // there has to be a wrapper here because react can only return a single url element
    <>
      <CurrentWeather data={data} />
      <Forecast data={data} />
    </>
  )

  const loadingDiv = <div className="loadingDiv">Loading . . .</div>


  return (
    <div className="App">
      <ToastContainer />
      <h2 style={{ margin: "30px 0px" }}>Weather App</h2>
      <Search setSearchResults={setSearchResults} />
      {loading ? loadingDiv : body}
    </div>
  );
}

export default App;
