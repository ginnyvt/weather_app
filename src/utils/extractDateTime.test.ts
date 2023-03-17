import { extractDateTime } from "./extractDateTime";

describe("extractDateTime", () => {
	it("should extract the date and time from a Unix timestamp", () => {
		const timestamp = 1678875254; // March 15th 12:14
		const expected = { date: "Mar 15th", time: "12:14" };
		const result = extractDateTime(timestamp);
		expect(result).toEqual(expected);
	});

	it("should throw an error for invalid input", () => {
		const timestamp = -123344;
		expect(() => extractDateTime(timestamp)).toThrow("Invalid timestamp input.");
	});
});
