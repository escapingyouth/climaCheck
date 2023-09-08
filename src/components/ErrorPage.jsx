import PropTypes from 'prop-types';

ErrorPage.propTypes = {
	message: PropTypes.string
};

function ErrorPage({ message }) {
	return (
		<div
			className="bg-[url('/error.jpg')] bg-cover bg-center w-screen h-screen
                      text-[#CDD4DE] flex flex-col justify-center items-center bg-black
                       bg-blend-multiply bg-opacity-40"
		>
			<h1 className='font-extrabold text-[15rem] opacity-60 -mb-3'>404</h1>
			<h2 className='font-extrabold text-[2rem] opacity-70'>{message}</h2>
			<span className='font-medium text-xl'>
				I tried to catch fog, but I mist
			</span>

			<a
				href='/'
				className='border border-white px-4 py-2 mt-4 hover:opacity-70'
			>
				Try again
			</a>
		</div>
	);
}

export default ErrorPage;
