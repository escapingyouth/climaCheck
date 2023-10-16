import { useWeatherContext } from '../contexts/WeatherContext';

function LocationInput() {
	const { location, handleSetLocation } = useWeatherContext();
	return (
		<input
			type='text'
			name='location'
			id='location'
			className='text-secondary bg-transparent font-raleway !placeholder-primary
						    focus:outline-none border-b-[1px] pb-2 ml-14 w-3/5 border-primary
						    focus:border-secondary focus:!placeholder-secondary transition duration-300
							max-[420px]:ml-6 '
			placeholder='Enter location'
			autoComplete='off'
			value={location}
			onChange={handleSetLocation}
		/>
	);
}

export default LocationInput;
