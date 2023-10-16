import { useWeatherContext } from '../contexts/WeatherContext';

function ErrorPage() {
	const { error } = useWeatherContext();

	return (
		<div
			className="bg-[url('/error.webp')] bg-cover bg-center w-screen h-screen
                      text-[#CDD4DE] flex flex-col justify-center items-center bg-black
                       bg-blend-multiply bg-opacity-40 text-center"
		>
			<h1 className='font-extrabold text-[15rem] opacity-60 -mb-3 max-[540px]:text-[10rem]'>
				404
			</h1>
			<h2
				className='font-extrabold text-[2rem] opacity-70 max-[540px]:text-[1.5rem] 
				max-[420px]:text-[1.3rem]'
			>
				{error}
			</h2>
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
