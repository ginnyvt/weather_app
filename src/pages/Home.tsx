// library import
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
// internal import
import { cities } from "../assets/cityData";
import { City, FetchedWeatherData } from "../types/dataTypes";

// components
import ForecastWeather from "../components/ForecastWeather";
import CurrentWeather from "../components/CurrentWeather";
//styling
import "./Home.css";
import { fetchCityCurrentWeather } from "../utils/fetchCityCurrentWeather";
import { fetchCityForecastWeather } from "../utils/fetchCityForecastWeather";

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedCity, setSelectedCity] = useState("all");
	const [weatherData, setWeatherData] = useState<FetchedWeatherData[]>([]);

	const fetchData = async () => {
		setIsLoading(true);
		const promises = cities.map(async (city: City) => {
			const currentWeatherPromise = fetchCityCurrentWeather(city);
			const forecastWeatherPromise = fetchCityForecastWeather(city);
			const [currentWeather, forecastWeather] = await Promise.all([currentWeatherPromise, forecastWeatherPromise]);

			return {
				currentWeather,
				forecastWeather,
				cityName: city.name,
			};
		});
		const results = await Promise.all(promises);
		setIsLoading(false);
		setWeatherData(results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleCityChange = (event: any) => {
		setSelectedCity(event.target.value);
	};

	let filteredWeatherData: FetchedWeatherData[] = [];
	if (selectedCity === "all") filteredWeatherData = weatherData;
	else filteredWeatherData = weatherData.filter((data) => data.cityName === selectedCity);

	if (isLoading) {
		return <p>Loading...</p>;
	}

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

					{filteredWeatherData.map((data) => (
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
