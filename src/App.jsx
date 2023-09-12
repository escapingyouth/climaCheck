import { useState, useEffect } from 'react';
import useWeather from './customHooks/useWeather';

import Container from './components/Container';
import Box from './components/Box';
import WeatherSummary from './components/WeatherSummary';
import WeatherInfo from './components/WeatherInfo';
import LocationInput from './components/LocationInput';
import SearchButton from './components/SearchButton';
import WeatherSearch from './components/WeatherSearch';
import RecentLocations from './components/RecentLocations';
import WeatherDetails from './components/WeatherDetails';

import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import Preloader from './components/Preloader';

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
	const {
		location,
		backgroundUrl,
		weather,
		isLoading,
		error,
		recentLocations,
		handleSetLocation,
		fetchWeatherData
	} = useWeather(apiKey);

	const [pageLoading, setPageLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setPageLoading(false);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return pageLoading ? (
		<Preloader />
	) : (
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
								<RecentLocations recentLocations={recentLocations} />
								<WeatherDetails weather={weather} />
							</>
						)}
					</WeatherInfo>
				</Box>
			)}

			{error && <ErrorPage message={error} />}
		</Container>
	);
};

export default App;
