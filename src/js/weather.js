import weatherCardTemplate from '../templates/weather-card.hbs';
import { fetchWeatherByCityName } from './weatherAPI';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${date.getHours()}:${date.getMinutes()}`;
};

weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
function onWeatherFormSubmit(event) {
  event.preventDefault();
  const searchCity = event.target.elements.user_country.value.trim();

  fetchWeatherByCityName(searchCity).then(data => {
    const newData = {
      ...data,
      sys: { sunrise: convertSecondsToHoursAndMinutes(data.sys.sunrise), sunset: convertSecondsToHoursAndMinutes(data.sys.sunset), },
    };
    weatherWrapperEl.innerHTML = weatherCardTemplate(newData);
  }).catch((err)=>{weatherWrapperEl.innerHTML = 'Упс! Місто не знайдено.'});
  weatherFormEl.reset()
}
