import { City, ForecastWeatherData } from "../types/dataTypes";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const baseUrl = process.env.REACT_APP_OPEN_WEATHER_URL;

export const fetchCityForecastWeather = async (city: City): Promise<ForecastWeatherData | false> => {
	const queryParams = new URLSearchParams({
		appid: apiKey!,
		lat: city.coord.lat.toString(),
		lon: city.coord.lon.toString(),
		units: "metric",
		cnt: "5",
	});
	try {
		const response = await fetch(`${baseUrl}/forecast/?${queryParams}`);
		const data: ForecastWeatherData = await response.json();
		return data;
	} catch (error) {
		return false;
	}
};
