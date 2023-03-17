import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import { ForecastWeatherData } from "../types/dataTypes";
import { extractDateTime } from "../utils/extractDateTime";
import styles from "./ForecastWeather.module.css";

interface ForecastWeatherProps {
	forecastWeather: ForecastWeatherData | false;
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ forecastWeather }) => {
	const iconUrl = process.env.REACT_APP_OPEN_WEATHER_ICON_URL;

	return (
		<IonGrid className="card-groups">
			<IonRow className={styles["row"]}>
				{forecastWeather === false && (
					<IonCol size="12" className={styles["column"]}>
						<IonCard className={styles["card"]}>
							<IonCardContent>
								<p>No data</p>
							</IonCardContent>
						</IonCard>
					</IonCol>
				)}
				{forecastWeather !== false &&
					forecastWeather.list.map((data, index) => (
						<IonCol size="2.4" key={index} className={styles["column"]}>
							<IonCard className={styles["card"]}>
								<IonCardContent className={styles["card-content"]}>
									<div className={styles["card-top"]}>
										<h3>{extractDateTime(data.dt).time}</h3>
										<div className={styles["icon"]}>
											<img src={`${iconUrl}/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
										</div>
										<h2>{Math.round(data.main.temp)} °C</h2>
									</div>
									<div className={styles["card-bottom"]}>
										<p>{data.wind.speed} m/s</p>
										<p>{data.main.humidity}%</p>
										<p>{data.rain ? data.rain["3h"] : 0} mm</p>
									</div>
								</IonCardContent>
							</IonCard>
						</IonCol>
					))}
			</IonRow>
		</IonGrid>
	);
};

export default ForecastWeather;
