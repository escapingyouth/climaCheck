import PropTypes from 'prop-types';

RecentLocations.propTypes = {
	recentLocations: PropTypes.array
};

function RecentLocations({ recentLocations }) {
	return (
		<div className='my-16 px-14'>
			<h2 className='text-secondary font-normal mb-4'>Your recent locations</h2>
			<ul className='[&>li]:mb-4 border-b-[1px] pb-2 border-primary'>
				{recentLocations
					?.slice(-4)
					.reverse()
					.map((recentLocation, i) => (
						<li key={i}>{recentLocation}</li>
					))}
			</ul>
		</div>
	);
}

export default RecentLocations;
