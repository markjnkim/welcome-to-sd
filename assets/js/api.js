import axios from 'axios';

const API_KEY = '51120a1852d3bb845834ebad87c9648e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function getWeather(city='San+Diego') {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return request;
}