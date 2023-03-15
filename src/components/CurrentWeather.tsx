import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";

import { WeatherData } from "../types/dataTypes";
import { extractDateTime } from "../utils/extractDateTime";
import styles from "./CurrentWeather.module.css";

interface CurrentWeatherProps {
	currentWeather: WeatherData | false;
	cityName: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather, cityName }) => {
	if (currentWeather === false) {
		return (
			<div className="container">
				<p>No data</p>
			</div>
		);
	}

	const dt = extractDateTime(currentWeather.dt);
	return (
		<IonGrid>
			<IonRow className={styles["row"]}>
				<IonCol size="12" className={styles["row"]}>
					<IonCard className={styles["card"]}>
						<IonCardContent>
							<div className={styles["card-top"]}>
								<div className={styles["card-top-left"]}>
									<h2>{cityName}</h2>
									<p>{currentWeather.weather[0].description}</p>
								</div>
								<div className={styles["card-top-right"]}>
									<div>
										<img src={`https://openweathermap.org/img/wn/${currentWeather!.weather[0].icon}@2x.png`} alt="Weather icon" />
									</div>
									<h2>{currentWeather.main.temp}°C</h2>
								</div>
							</div>
							<div className={styles["card-bottom"]}>
								<div className={styles["card-bottom-left"]}>
									<p>{dt.date}</p>
									<p>{dt.time}</p>
								</div>
								<div className={styles["card-bottom-right"]}>
									<p>Wind: {currentWeather.wind.speed} m/s</p>
									<p>Humidity: {currentWeather.main.humidity}%</p>
									{currentWeather.rain ? (
										<p>Precipitation: {currentWeather.rain["3h"]} mm</p>
									) : (
										<p>No precipitation in the next 3 hours</p>
									)}
								</div>
							</div>
						</IonCardContent>
					</IonCard>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default CurrentWeather;
