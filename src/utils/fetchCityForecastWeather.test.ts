import { cities } from "../assets/cityData";
import { fetchCityForecastWeather } from "./fetchCityForecastWeather";

// Mock the axios module
const axios = require("axios");

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchCityForecastWeather", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("fetches the forecast weather for a given city", async () => {
		const city = cities[0];

		const mockResponse = {
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
		};

		mockedAxios.get.mockResolvedValue({ data: mockResponse });

		const result = await fetchCityForecastWeather(city);

		expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_OPEN_WEATHER_URL}/forecast`, {
			params: {
				appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
				lat: city.coord.lat,
				lon: city.coord.lon,
				units: "metric",
				cnt: 5,
			},
		});
		expect(result).toEqual(mockResponse);
	});

	it("returns false when the request fails", async () => {
		const city = cities[0];

		mockedAxios.get.mockRejectedValue(new Error("Request failed"));

		const result = await fetchCityForecastWeather(city);

		expect(result).toBe(false);
	});
});
