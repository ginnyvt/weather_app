import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCol,
	IonGrid,
	IonRow,
} from "@ionic/react";
import "./ForecastWeather.css";

interface ForecastWeatherProps {}

const ForecastWeather: React.FC<ForecastWeatherProps> = () => {
	return (
		<div className="container">
			<h2>Forecast weather card</h2>
			{/* <IonGrid>
				<IonRow>
					<IonCol size="12" size-sm="2">
						1
					</IonCol>
					<IonCol size="12" size-sm="2">
						2
					</IonCol>
					<IonCol size="12" size-sm="2">
						3
					</IonCol>
					<IonCol size="12" size-sm="2">
						4
					</IonCol>
					<IonCol size="12" size-sm="2">
						5
					</IonCol>
				</IonRow>
			</IonGrid> */}
			<IonGrid>
				<IonRow>
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
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default ForecastWeather;
