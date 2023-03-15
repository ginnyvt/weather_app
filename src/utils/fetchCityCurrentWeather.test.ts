import { cities } from "../assets/cityData";
import { fetchCityCurrentWeather } from "./fetchCityCurrentWeather";

const axios = require("axios");

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchCityCurrentWeather", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("fetches the current weather for a given city", async () => {
		const city = cities[0];

		const mockResponse = {
			dt: 1618319060,
			main: { temp: 12.34 },
			weather: [{ description: "clear sky" }],
			wind: { speed: 3.6 },
			rain: null,
		};

		mockedAxios.get.mockResolvedValue({ data: mockResponse });

		const result = await fetchCityCurrentWeather(city);

		expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_OPEN_WEATHER_URL}/weather`, {
			params: {
				appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
				lat: city.coord.lat,
				lon: city.coord.lon,
				units: "metric",
			},
		});
		expect(result).toEqual({
			dt: mockResponse.dt,
			main: mockResponse.main,
			weather: mockResponse.weather,
			wind: mockResponse.wind,
			rain: mockResponse.rain,
		});
	});

	it("returns false when the request fails", async () => {
		const city = cities[0];

		mockedAxios.get.mockRejectedValue(new Error("Request failed."));

		const result = await fetchCityCurrentWeather(city);

		expect(result).toBe(false);
	});
});
