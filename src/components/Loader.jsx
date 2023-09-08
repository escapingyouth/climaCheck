import { ReactComponent as Sun } from '../assets/svgs/sun.svg';
import { ReactComponent as Cloud } from '../assets/svgs/cloud.svg';

function Loader() {
	return (
		<div className='loader'>
			<Sun id='sun' />
			<Cloud id='cloud' />
			<div className='rain'>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
				<span className='drop'></span>
			</div>

			<div className='text'>LOOKING OUTSIDE FOR YOU... ONE SEC</div>
		</div>
	);
}

export default Loader;
