// library import
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import axios from "axios";
// internal import
import { cities } from "../utils/cityData";
import { FetchedCurrentWeather, FetchedForecastWeather, FetchedWeatherData, WeatherData } from "../utils/dataTypes";
// components
import ForecastWeather from "../components/ForecastWeather";
import CurrentWeather from "../components/CurrentWeather";
//styling
import "./Home.css";

const Home: React.FC = () => {
	const [selectedCity, setSelectedCity] = useState("all");
	const [weatherData, setWeatherData] = useState<FetchedWeatherData[] | null>(null);

	const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
	const baseUrl = process.env.REACT_APP_OPEN_WEATHER_URL;

	const fetchData = async () => {
		const promises = cities.map(async (city) => {
			const currentWeatherPromise = axios({
				url: `${baseUrl}/weather`,
				params: {
					appid: apiKey,
					lat: city.coord.lat,
					lon: city.coord.lon,
					units: "metric",
				},
			});

			const forecastWeatherPromise = axios({
				url: `${baseUrl}/forecast`,
				params: {
					appid: apiKey,
					lat: city.coord.lat,
					lon: city.coord.lon,
					units: "metric",
					cnt: 5,
				},
			});

			const [currentWeatherResponse, forecastWeatherResponse] = await Promise.all([
				currentWeatherPromise,
				forecastWeatherPromise,
			]);

			const currentWeatherData: FetchedCurrentWeather = currentWeatherResponse.data;
			const currentWeather: WeatherData = {
				dt: currentWeatherData.dt,
				main: currentWeatherData.main,
				weather: currentWeatherData.weather,
				wind: currentWeatherData.wind,
				rain: currentWeatherData.rain,
			};
			const forecastWeatherData: FetchedForecastWeather = forecastWeatherResponse.data;

			return {
				currentWeather,
				forecastWeather: forecastWeatherData,
				cityName: city.name,
			};
			// in map
		});

		// in function
		const results = await Promise.all(promises);
		setWeatherData(results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(weatherData);

	const handleCityChange = (event: any) => {
		setSelectedCity(event.target.value);
	};

	const filterWeatherData = () => {
		if (selectedCity === "all") {
			return weatherData;
		}
		return weatherData!.filter((data) => data.cityName === selectedCity);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Säätutka</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<>
					<IonSelect value={selectedCity} onIonChange={handleCityChange} interface="popover" className="weather-select">
						<IonSelectOption value="all" className="select-option">
							All Cities
						</IonSelectOption>
						{cities.map((city) => (
							<IonSelectOption key={city.name} value={city.name} className="select-option">
								{city.name}
							</IonSelectOption>
						))}
					</IonSelect>

					{filterWeatherData()?.map((data) => (
						<div key={data.cityName}>
							<CurrentWeather cityName={data.cityName} currentWeather={data.currentWeather} />
							<ForecastWeather forecastWeather={data.forecastWeather} />
						</div>
					))}
				</>
			</IonContent>
		</IonPage>
	);
};

export default Home;
