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
		<div
			className='h-full w-3/5 max-[912px]:w-full px-11 pt-14 pb-20 max-[912px]:pb-32
					   max-[820px]:pb-72 max-[768px]:pb-64 max-[540px]:pb-24 max-[420px]:px-6'
		>
			<span className='font-medium  max-[820px]:hidden'>ClimaCheck</span>
			{name && (
				<div className='flex flex-col justify-end h-full text-[#e9ecef]'>
					<h1
						className='text-[10rem] max-[1024px]:text-[8rem] max-[912px]:text-[10rem] -ml-1
								  font-medium -mb-8  max-[380px]:text-[8rem]'
					>
						{Math.round(temp)}&deg;
					</h1>
					<div className='flex items-end gap-32 max-[420px]:gap-10 '>
						<div>
							<h2
								className='text-[3rem] max-[1024px]:text-[2rem] max-[912px]:text-[3rem]
											max-[420px]:mb-2 max-[380px]:text-[2rem] leading-[1.1]'
							>
								{name}
							</h2>
							<span className='max-[420px]:text-[0.9rem]'>
								{formattedTime} - {formattedDate}
							</span>
						</div>
						<div className='text-center'>
							<img
								src={`https://openweathermap.org/img/wn/${icon}.png`}
								alt='weather icon'
								className='w-16 h-16 max-[300px]:w-10 max-[300px]:h-10'
							/>
							<span className='capitalize max-[420px]:text-[0.9rem] inline-block min-w-max'>
								{description}
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default WeatherSummary;
