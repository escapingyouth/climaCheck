import { useWeatherContext } from '../contexts/WeatherContext';

import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';

function SearchButton() {
	const { fetchWeatherData } = useWeatherContext();
	return (
		<button
			className='bg-[#e9ecef] hover:opacity-90 py-6 px-7 transition duration-200
			             max-[380px]:py-4  max-[380px]:px-6'
			onClick={fetchWeatherData}
		>
			<SearchIcon className='w-8 h-8  max-[380px]:w-7  max-[380px]:h-7' />
		</button>
	);
}

export default SearchButton;
