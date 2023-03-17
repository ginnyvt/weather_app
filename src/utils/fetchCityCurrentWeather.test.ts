import { cities } from "../assets/cityData";
import { fetchCityCurrentWeather } from "./fetchCityCurrentWeather";

function mockFetch() {
	return jest.spyOn(window, "fetch").mockResolvedValue(
		new Response(
			JSON.stringify({
				dt: 1618319060,
				main: { temp: 12.34 },
				weather: [{ description: "clear sky" }],
				wind: { speed: 3.6 },
				rain: null,
			})
		)
	);
}

beforeEach(() => mockFetch());

describe("fetchCityCurrentWeather", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("fetches the current weather for a given city", async () => {
		const city = cities[0];

		const result = await fetchCityCurrentWeather(city);

		expect(result).toEqual({
			dt: 1618319060,
			main: { temp: 12.34 },
			weather: [{ description: "clear sky" }],
			wind: { speed: 3.6 },
			rain: null,
		});
	});
});
