import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";

import { WeatherData } from "../types/dataTypes";
import { extractDateTime } from "../utils/extractDateTime";
import styles from "./CurrentWeather.module.css";

interface CurrentWeatherProps {
	currentWeather: WeatherData | false;
	cityName: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather, cityName }) => {
	const iconUrl = process.env.REACT_APP_OPEN_WEATHER_ICON_URL;
	let content;
	if (currentWeather === false) {
		content = (
			<IonCardContent>
				<p>No data available</p>
			</IonCardContent>
		);
	} else {
		const dt = extractDateTime(currentWeather.dt);
		content = (
			<IonCardContent>
				<div className={styles["card-top"]}>
					<div className={styles["card-top-left"]}>
						<h2>{cityName}</h2>
						<p>{currentWeather.weather[0].description}</p>
					</div>
					<div className={styles["card-top-right"]}>
						<div>
							<img src={`${iconUrl}/${currentWeather!.weather[0].icon}@2x.png`} alt="Weather icon" />
						</div>
						<h2>{Math.round(currentWeather.main.temp)} °C</h2>
					</div>
				</div>
				<div className={styles["card-bottom"]}>
					<div className={styles["card-bottom-left"]}>
						<h3>{dt.date}</h3>
						<p>{dt.time}</p>
					</div>
					<div className={styles["card-bottom-right"]}>
						<p>Wind: {currentWeather.wind.speed} m/s</p>
						<p>Humidity: {currentWeather.main.humidity}%</p>
						<p>Precipitation (3 h): {currentWeather.rain ? currentWeather.rain["3h"] : 0} mm</p>
					</div>
				</div>
			</IonCardContent>
		);
	}

	return (
		<IonGrid>
			<IonRow className={styles["row"]}>
				<IonCol size="12" className={styles["row"]}>
					<IonCard className={styles["card"]}>{content}</IonCard>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default CurrentWeather;
