import { cities } from "../assets/cityData";
import { fetchCityForecastWeather } from "./fetchCityForecastWeather";

//global.fetch = jest.fn(async () => Promise.resolve({ json: async () => Promise.resolve({ id: 0 }) })) as jest.Mock;

function mockFetch() {
	return jest.spyOn(window, "fetch").mockResolvedValue(
		new Response(
			JSON.stringify({
				list: [
					{
						dt: 1618319060,
						main: { temp: 12.34 },
						weather: [{ description: "clear sky" }],
						wind: { speed: 3.6 },
						rain: null,
					},
					{
						dt: 1618319061,
						main: { temp: 12.34 },
						weather: [{ description: "broken clouds" }],
						wind: { speed: 3.6 },
						rain: null,
					},
				],
			})
		)
	);
}

beforeEach(() => mockFetch());

describe("fetchCityForecastWeather", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("fetches the forecast weather for a given city", async () => {
		const city = cities[0];
		const result = await fetchCityForecastWeather(city);
		expect(result).toEqual({
			list: [
				{
					dt: 1618319060,
					main: { temp: 12.34 },
					weather: [{ description: "clear sky" }],
					wind: { speed: 3.6 },
					rain: null,
				},
				{
					dt: 1618319061,
					main: { temp: 12.34 },
					weather: [{ description: "broken clouds" }],
					wind: { speed: 3.6 },
					rain: null,
				},
			],
		});
	});
});
