import { useWeatherContext } from '../contexts/WeatherContext';
import PropTypes from 'prop-types';

Box.propTypes = {
	children: PropTypes.node.isRequired
};

function Box({ children }) {
	const { backgroundUrl } = useWeatherContext();

	return (
		<div
			className='w-[85%] overflow-hidden h-[90%] max-[1024px]:w-[95%] max-[1024px]:h-[95%] drop-shadow-xl flex
					   max-[912px]:relative  max-[912px]:w-full  max-[912px]:h-full '
			style={{
				background: `url('${backgroundUrl}') center/cover no-repeat`
			}}
		>
			{children}
		</div>
	);
}

export default Box;
