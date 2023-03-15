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
		<div className="container">
			<IonGrid className="card-groups">
				<IonRow>
					{forecastWeather.list.map((data, index) => (
						<IonCol size="12" size-sm="2.4" key={index}>
							<IonCard>
								<IonCardContent>
									<div className={styles["card-top"]}>
										<h2>{extractDateTime(data.dt).time}</h2>
										<div>
											<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
										</div>
										<h2>{data.main.temp}°C</h2>
									</div>
									<hr />
									<div className={styles["card-bottom"]}>
										<p>{data.wind.speed} m/s</p>
										<p>{data.main.humidity}%</p>
										{data.rain ? <p>Precipitation: {data.rain["3h"]} mm</p> : <p>No precipitation in the next 3 hours</p>}
									</div>
								</IonCardContent>
							</IonCard>
						</IonCol>
					))}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default ForecastWeather;
