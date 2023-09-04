import SearchButton from './components/SearchButton';
import PropTypes from 'prop-types';

Search.propTypes = {
	children: PropTypes.node.isRequired
};
Container.propTypes = {
	children: PropTypes.node.isRequired
};
Box.propTypes = {
	children: PropTypes.node.isRequired
};
WeatherSummary.propTypes = {
	children: PropTypes.node.isRequired
};
WeatherInfo.propTypes = {
	children: PropTypes.node.isRequired
};

function Search({ children }) {
	return <nav className='flex justify-between items-end'>{children}</nav>;
}

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
function Box({ children }) {
	return (
		<div
			className="w-[85%] h-[90%] bg-[url('assets/images/background.jpg')] bg-cover 
        		   bg-no-repeat bg-center drop-shadow-xl flex"
		>
			{children}
		</div>
	);
}

function WeatherSummary({ children }) {
	return <div className='h-full w-3/5 px-11 pt-14'>{children}</div>;
}

function WeatherInfo({ children }) {
	return (
		<div className='w-2/5 h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-lg'>
			{children}
		</div>
	);
}

const App = () => {
	return (
		<Container>
			<Box>
				<WeatherSummary>
					<span className='font-medium'>ClimaCheck</span>
					<h1 className='text-[10rem] font-medium'></h1>
				</WeatherSummary>
				<WeatherInfo>
					<Search>
						<input
							type='text'
							name='location'
							id='location'
							className='text-[#c0cbda] bg-transparent font-raleway !placeholder-[#94A3B8] 
						    focus:outline-none border-b-[1px] pb-2 ml-14 w-3/5 border-[#94A3B8]
						    focus:border-[#c0cbda] focus:!placeholder-[#c0cbda] transition duration-300'
							placeholder='Enter location'
							autoComplete='off'
						/>
						<SearchButton />
					</Search>
				</WeatherInfo>
			</Box>
		</Container>
	);
};

export default App;
