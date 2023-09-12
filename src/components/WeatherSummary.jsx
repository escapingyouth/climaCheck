import PropTypes from 'prop-types';
import { formatDateTime } from '../../utils/dateTime';

WeatherSummary.propTypes = {
	weather: PropTypes.object
};

function WeatherSummary({
	weather: { name, temp, description, icon, dt, timezone }
}) {
	const { formattedDate, formattedTime } = formatDateTime(dt, timezone);

	return (
		<div className='h-full w-3/5 px-11 pt-14 pb-20'>
			<span className='font-medium'>ClimaCheck</span>
			{name && (
				<div className='flex flex-col justify-end h-full'>
					<h1 className='text-[10rem] font-medium -mb-4'>
						{Math.round(temp)}&deg;
					</h1>
					<div className='flex items-end gap-32'>
						<div>
							<h2 className='text-[3rem]'>{name}</h2>
							<span>
								{formattedTime} - {formattedDate}
							</span>
						</div>
						<div className='text-center'>
							<img
								src={`https://openweathermap.org/img/wn/${icon}.png`}
								alt='weather icon'
								className='w-16 h-16'
							/>
							<span className='capitalize'>{description}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default WeatherSummary;
