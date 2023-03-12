import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import "./CurrentWeather.css";

interface CurrentWeatherProps {}

const CurrentWeather: React.FC<CurrentWeatherProps> = () => {
	return (
		<div className="container">
			<h2>Current weather card</h2>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Helsinki</IonCardTitle>
					<IonCardSubtitle>Clear sky</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
			</IonCard>
		</div>
	);
};

export default CurrentWeather;
