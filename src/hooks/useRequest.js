import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from 'react-toastify';


const useRequest = (searchResults) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=10&aqi=no&alerts=no`

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchResults !== "") {
            setLoading(true)
            axios.get(url).then((res) => {
                //loading state - because axios is not synchronous, there needs to be a state for when things are 'loading'
                setLoading(false);
                setData(res.data);
            }).catch((err) => {
                toast.error('Error loading data, check spelling')
                setLoading(false)
            });
        };
    }, [searchResults]);

    return { loading, data };
};

export default useRequest