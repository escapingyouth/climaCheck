import PropTypes from 'prop-types';

WeatherInfo.propTypes = {
	children: PropTypes.node.isRequired
};

function WeatherInfo({ children }) {
	return (
		<div
			className='text-primary max-[912px]:absolute max-[912px]:-translate-x-1/2 max-[912px]:-translate-y-2/3
					  max-[912px]:top-1/2 max-[912px]:left-1/2 max-[912px]:h-1/2 max-[912px]:w-[90%]
					  max-[820px]:overflow-y-scroll max-[820px]:w-screen max-[820px]:top-0 max-[820px]:translate-y-0
					  max-[820px]:h-1/3 max-[540px]:h-[45%]
					  w-2/5 h-full bg-[rgba(0,0,0,0.6)] backdrop-blur-lg'
		>
			{children}
		</div>
	);
}

export default WeatherInfo;
