import moment from "moment";

export const extractDateTime = (timestamp: number) => {
	if (timestamp < 0) {
		throw new Error("Invalid timestamp input.");
	}
	const formattedDt = moment.unix(timestamp).format("MMM Do, HH:mm");
	const [date, time] = formattedDt.split(", ");
	return { date, time };
};
