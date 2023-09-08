import PropTypes from 'prop-types';

LocationInput.propTypes = {
	location: PropTypes.string,
	onSetLocation: PropTypes.func
};

function LocationInput({ location, onSetLocation }) {
	return (
		<input
			type='text'
			name='location'
			id='location'
			className='text-secondary bg-transparent font-raleway !placeholder-primary 
						    focus:outline-none border-b-[1px] pb-2 ml-14 w-3/5 border-primary
						    focus:border-secondary focus:!placeholder-secondary transition duration-300'
			placeholder='Enter location'
			autoComplete='off'
			value={location}
			onChange={onSetLocation}
		/>
	);
}

export default LocationInput;
