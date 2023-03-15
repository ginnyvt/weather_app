import { City, WeatherData } from "../types/dataTypes";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const baseUrl = process.env.REACT_APP_OPEN_WEATHER_URL;

export const fetchCityCurrentWeather = async (city: City): Promise<WeatherData | false> => {
	const queryParams = new URLSearchParams({
		appid: apiKey!,
		lat: city.coord.lat.toString(),
		lon: city.coord.lon.toString(),
		units: "metric",
	});
	try {
		const response = await fetch(`${baseUrl}/weather/?${queryParams}`);
		const data = await response.json();
		const currentWeather: WeatherData = {
			dt: data.dt,
			main: data.main,
			weather: data.weather,
			wind: data.wind,
			rain: data.rain,
		};
		return currentWeather;
	} catch (error) {
		return false;
	}
};
