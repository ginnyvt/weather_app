import axios from "axios";
import { City, WeatherData } from "../types/dataTypes";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const baseUrl = process.env.REACT_APP_OPEN_WEATHER_URL;

export const fetchCityCurrentWeather = async (city: City): Promise<WeatherData | false> => {
	try {
		const { data } = await axios({
			url: `${baseUrl}/weather`,
			params: {
				appid: apiKey,
				lat: city.coord.lat,
				lon: city.coord.lon,
				units: "metric",
			},
		});
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
