const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '244c521486125f15aadc812b8c907b87';

export const fetchWeatherByCityName = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&units=metric&lang=ua&appid=${API_KEY}`).then(
    res => {
      if (!res.ok) {
        throw new Error(response.status);
      }
      return res.json();
    }
  );
