import moment from "moment";

export const extractDt = (dt: number) => {
	const formattedDt = moment.unix(dt).format("MMM Do, HH:mm");
	const [date, time] = formattedDt.split(", ");
	return { date, time };
};
