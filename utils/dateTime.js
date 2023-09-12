export function formatDateTime(dt, timezone) {
	const timestampMilliseconds = dt * 1000 + timezone * 1000;

	const date = new Date(timestampMilliseconds);

	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const dayName = dayNames[date.getDay()];
	const day = date.getDate();
	const monthName = monthNames[date.getMonth()];
	const year = date.getFullYear();

	const hours = date.getHours();
	const minutes = date.getMinutes();

	const formattedDate = `${dayName}, ${day} ${monthName} ${year}`;
	const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}`;

	return {
		formattedDate,
		formattedTime
	};
}
