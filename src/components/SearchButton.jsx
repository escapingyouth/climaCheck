import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';

SearchButton.propTypes = {
	fetchWeatherData: PropTypes.func
};

function SearchButton({ fetchWeatherData }) {
	return (
		<button
			className='bg-secondary hover:opacity-90 py-6 px-7 transition duration-200'
			onClick={fetchWeatherData}
		>
			<SearchIcon className='w-8 h-8' />
		</button>
	);
}

export default SearchButton;
