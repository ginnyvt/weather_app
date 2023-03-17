// library import
import {
	IonContent,
	IonFooter,
	IonHeader,
	IonLoading,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
// internal import
import { cities } from "../assets/cityData";
import { City, FetchedWeatherData } from "../types/dataTypes";
import { fetchCityCurrentWeather } from "../utils/fetchCityCurrentWeather";
import { fetchCityForecastWeather } from "../utils/fetchCityForecastWeather";
// components
import ForecastWeather from "../components/ForecastWeather";
import CurrentWeather from "../components/CurrentWeather";
//styling
import styles from "./Home.module.css";

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

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className={styles["page-header"]} color="primary">
						Säätutka
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent color="light" fullscreen>
				<div className={styles.wrapper}>
					<IonLoading isOpen={isLoading} onDidDismiss={() => setIsLoading(false)} message={"Loading..."} />

					{!isLoading && (
						<div>
							<div className={styles["select-container"]}>
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
							</div>

							<div>
								{filteredWeatherData.map((data) => (
									<div key={data.cityName}>
										<CurrentWeather cityName={data.cityName} currentWeather={data.currentWeather} />
										<ForecastWeather forecastWeather={data.forecastWeather} />
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonTitle style={{ textAlign: "center", fontSize: "12pt", fontWeight: "light" }}>
						Copyright &copy;{" "}
						<a href="https://github.com/ginnyvt/weather_app" target="blank">
							ginnyvt
						</a>
					</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default Home;
