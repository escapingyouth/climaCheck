import { useWeatherContext } from '../contexts/WeatherContext';

function RecentLocations() {
	const { recentLocations } = useWeatherContext();

	return (
		<div className='my-16 px-14 max-[1024px]:my-10  max-[420px]:px-6'>
			<h2 className='text-secondary font-normal mb-4'>Your recent locations</h2>
			<ul className='[&>li]:mb-4 border-b-[1px] pb-2 border-primary'>
				{recentLocations
					?.slice(-3)
					.reverse()
					.map((recentLocation, i) => (
						<li key={i}>{recentLocation}</li>
					))}
			</ul>
		</div>
	);
}

export default RecentLocations;
