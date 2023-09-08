import PropTypes from 'prop-types';

WeatherSearch.propTypes = {
	children: PropTypes.node.isRequired
};

function WeatherSearch({ children }) {
	return <nav className='flex justify-between items-end'>{children}</nav>;
}

export default WeatherSearch;
