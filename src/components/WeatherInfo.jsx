import PropTypes from 'prop-types';

WeatherInfo.propTypes = {
	children: PropTypes.node.isRequired
};

function WeatherInfo({ children }) {
	return (
		<div className='text-primary w-2/5 h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-lg'>
			{children}
		</div>
	);
}

export default WeatherInfo;
