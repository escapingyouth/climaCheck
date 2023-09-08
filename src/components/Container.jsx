import PropTypes from 'prop-types';

Container.propTypes = {
	children: PropTypes.node.isRequired
};

function Container({ children }) {
	return (
		<div
			className='h-screen w-screen bg-gradient-to-r from-[#414141]
     	    to-[#100f0f] flex justify-center items-center text-white select-none'
		>
			{children}
		</div>
	);
}

export default Container;
