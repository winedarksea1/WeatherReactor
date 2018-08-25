import axios from 'axios';

const API_KEY = '6c92dcdc9bee867539765843875f88f5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
