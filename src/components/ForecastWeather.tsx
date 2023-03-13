import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import { FetchedForecastWeather } from "../utils/dataTypes";
import styles from "./ForecastWeather.module.css";

interface ForecastWeatherProps {
	forecastWeather: FetchedForecastWeather;
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ forecastWeather }) => {
	return (
		<div className="container">
			<IonGrid className="card-groups">
				<IonRow>
					{forecastWeather.list.map((data) => (
						<IonCol size="12" size-sm="2.4">
							<IonCard>
								<IonCardContent>
									<div className={styles["card-top"]}>
										<h2>15:00</h2>
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

					{/* <IonCol size="12" size-sm="2.4">
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>Helsinki</IonCardTitle>
								<IonCardSubtitle>Clear sky</IonCardSubtitle>
							</IonCardHeader>
							<IonCardContent>
								Here's a small text description for the card content. Nothing more, nothing less.
							</IonCardContent>
						</IonCard>
					</IonCol>
					<IonCol size="12" size-sm="2.4">
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>Helsinki</IonCardTitle>
								<IonCardSubtitle>Clear sky</IonCardSubtitle>
							</IonCardHeader>
							<IonCardContent>
								Here's a small text description for the card content. Nothing more, nothing less.
							</IonCardContent>
						</IonCard>
					</IonCol>
					<IonCol size="12" size-sm="2.4">
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>Helsinki</IonCardTitle>
								<IonCardSubtitle>Clear sky</IonCardSubtitle>
							</IonCardHeader>
							<IonCardContent>
								Here's a small text description for the card content. Nothing more, nothing less.
							</IonCardContent>
						</IonCard>
					</IonCol>
					<IonCol size="12" size-sm="2.4">
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>Helsinki</IonCardTitle>
								<IonCardSubtitle>Clear sky</IonCardSubtitle>
							</IonCardHeader>
							<IonCardContent>
								Here's a small text description for the card content. Nothing more, nothing less.
							</IonCardContent>
						</IonCard>
					</IonCol> */}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default ForecastWeather;
