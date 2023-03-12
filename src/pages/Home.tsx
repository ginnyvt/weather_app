import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ForecastWeather from "../components/ForecastWeather";
import CurrentWeather from "../components/CurrentWeather";

import "./Home.css";

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Säätutka</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<>
					<CurrentWeather />
					<ForecastWeather />
				</>
			</IonContent>
		</IonPage>
	);
};

export default Home;
