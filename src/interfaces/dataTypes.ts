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

export interface MainWeatherData {
	temp: number;
	//feels_like: number;
	//temp_min: number;
	//temp_max: number;
	//pressure: number;
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
	id: number;
	name: string;
	timezone: number;
	coord: Coordinates;
	//country: string;
}

export interface FetchedForecastWeather {
	dt: number;
	main: MainWeatherData;
	weather: WeatherInfo[];
	wind: WindInfo;
	rain?: RainInfo;
	dt_txt: string;
}

export interface DisplayedForecastWeather {
	list: FetchedForecastWeather[];
	city: City;
}

export interface FetchedCurrentWeather {
	coord: Coordinates;
	weather: WeatherInfo[];
	main: MainWeatherData;
	wind: WindInfo;
	rain: RainInfo;
	dt: number;
	timezone: number;
	id: number;
	name: string;
}

export interface DisplayedCurrentWeather {
	temp: number;
	wind: number;
	humidity: number;
	dt: number;
	city: City;
	precipitation?: number;
	weather: WeatherInfo[];
}
