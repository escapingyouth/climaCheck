import { useState } from 'react';

import Container from './components/Container';
import Box from './components/Box';
import WeatherSummary from './components/WeatherSummary';
import WeatherInfo from './components/WeatherInfo';
import LocationInput from './components/LocationInput';
import SearchButton from './components/SearchButton';
import WeatherSearch from './components/WeatherSearch';
import SavedLocations from './components/SavedLocations';
import WeatherDetails from './components/WeatherDetails';

import Loader from './components/Loader';
import Error from './components/Error';

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
	const [location, setLocation] = useState('');
	const [backgroundUrl, setBackgroundUrl] = useState('/background.jpg');
	const [weather, setWeather] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSetLocation = (e) => {
		setLocation(e.target.value);
	};

	const fetchWeatherData = async () => {
		try {
			setIsLoading(true);

			if (location.length < 3) {
				setWeather({});
				setError('');
				return;
			}
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
			);

			if (!response.ok) {
				throw new Error(
					'Something went wrong with fetching weather information'
				);
			}
			const data = await response.json();

			if (data.Response === 'False') throw new Error('Location not found');

			const { name } = data;
			const { description, icon } = data.weather[0];
			const { temp, humidity, pressure } = data.main;
			const { speed } = data.wind;
			const { all: cloudiness } = data.clouds;

			setWeather({
				name,
				description,
				temp,
				humidity,
				speed,
				icon,
				pressure,
				cloudiness
			});

			setBackgroundUrl(`https://source.unsplash.com/1600x900/?${name}`);
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			{isLoading && <Loader />}

			{!isLoading && !error && (
				<Box backgroundUrl={backgroundUrl}>
					<WeatherSummary weather={weather} />

					<WeatherInfo>
						<WeatherSearch>
							<LocationInput
								location={location}
								onSetLocation={handleSetLocation}
							/>
							<SearchButton fetchWeatherData={fetchWeatherData} />
						</WeatherSearch>

						{weather.name && (
							<>
								<SavedLocations />
								<WeatherDetails weather={weather} />
							</>
						)}
					</WeatherInfo>
				</Box>
			)}

			{error && <Error message={error} />}
		</Container>
	);
};

export default App;
