import { useWeatherContext } from '../contexts/WeatherContext';

function WeatherDetails() {
	const {
		weather: { cloudiness, humidity, speed, pressure }
	} = useWeatherContext();

	return (
		<div className='px-14 h-full  max-[420px]:px-6 '>
			<h2 className='text-secondary font-normal mb-4'>Weather Details</h2>
			<ul
				className='[&>li]:flex [&>li]:justify-between [&>li]:items-center 
									  [&>li]:mb-4 border-b-[1px] pb-2 border-primary [&>li>h3]:text-secondary
									  [&>li>h3]:font-semibold'
			>
				<li>
					<span>Cloudy</span>
					<h3>{cloudiness}%</h3>
				</li>
				<li>
					<span>Humidity</span>
					<h3>{humidity}%</h3>
				</li>
				<li>
					<span>Wind</span>
					<h3>{speed} m/s</h3>
				</li>
				<li>
					<span>Pressure</span>
					<h3>{pressure} hPa</h3>
				</li>
			</ul>
		</div>
	);
}

export default WeatherDetails;
