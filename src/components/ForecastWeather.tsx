import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import { ForecastWeatherData } from "../types/dataTypes";
import { extractDateTime } from "../utils/extractDateTime";
import styles from "./ForecastWeather.module.css";

interface ForecastWeatherProps {
	forecastWeather: ForecastWeatherData | false;
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ forecastWeather }) => {
	if (forecastWeather === false) {
		return (
			<div className="container">
				<p>No data</p>
			</div>
		);
	}
	return (
		<IonGrid className="card-groups">
			<IonRow className={styles["row"]}>
				{forecastWeather.list.map((data, index) => (
					<IonCol size="2.4" key={index} className={styles["column"]}>
						<IonCard className={styles["card"]}>
							<IonCardContent className={styles["card-content"]}>
								<div className={styles["card-top"]}>
									<h2>{extractDateTime(data.dt).time}</h2>
									<div className={styles["icon"]}>
										<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
									</div>
									<h2>{data.main.temp}°C</h2>
								</div>
								<div className={styles["card-bottom"]}>
									<p>{data.wind.speed} m/s</p>
									<p>{data.main.humidity}%</p>
									{data.rain && <p>{data.rain["3h"]} mm</p>}
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
