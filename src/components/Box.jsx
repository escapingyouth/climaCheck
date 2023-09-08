import PropTypes from 'prop-types';

Box.propTypes = {
	backgroundUrl: PropTypes.string,
	children: PropTypes.node.isRequired
};

function Box({ backgroundUrl, children }) {
	return (
		<div
			className={`w-[85%] h-[90%] drop-shadow-xl flex`}
			style={{
				background: `url('${backgroundUrl}') center/cover no-repeat`
			}}
		>
			{children}
		</div>
	);
}

export default Box;
