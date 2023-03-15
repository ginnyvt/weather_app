import axios from "axios";
import { City, ForecastWeatherData } from "../types/dataTypes";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const baseUrl = process.env.REACT_APP_OPEN_WEATHER_URL;

export const fetchCityForecastWeather = async (city: City): Promise<ForecastWeatherData | false> => {
	try {
		const response = await axios({
			url: `${baseUrl}/forecast`,
			params: {
				appid: apiKey,
				lat: city.coord.lat,
				lon: city.coord.lon,
				units: "metric",
				cnt: 5,
			},
		});

		return response.data;
	} catch (error) {
		return false;
	}
};
