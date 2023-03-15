export interface WeatherInfo {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Coordinates {
	lat: number;
	lon: number;
}

export interface MainWeatherInfo {
	temp: number;
	humidity: number;
}

export interface WindInfo {
	speed: number;
	deg: number;
	gust?: number;
}

export interface RainInfo {
	"1h"?: number;
	"3h"?: number;
}

export interface City {
	id?: number;
	name: string;
	coord: Coordinates;
	timezone?: number;
	country?: string;
}

export interface WeatherData {
	dt: number;
	main: MainWeatherInfo;
	weather: WeatherInfo[];
	wind: WindInfo;
	rain?: RainInfo;
	dt_text?: string;
}

export interface ForecastWeatherData {
	list: WeatherData[];
}

export interface FetchedWeatherData {
	currentWeather: WeatherData | false;
	forecastWeather: ForecastWeatherData | false;
	cityName: string;
}
