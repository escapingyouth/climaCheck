import { useState, useEffect } from 'react';
import { useWeatherContext } from './contexts/WeatherContext';

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

const App = () => {
	const [pageLoading, setPageLoading] = useState(true);
	const { weather, isLoading, error } = useWeatherContext();

	// Page loading animation
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setPageLoading(false);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	if (pageLoading) return <Preloader />;

	return (
		<Container>
			{isLoading && <Loader />}

			{!isLoading && !error && (
				<Box>
					<WeatherSummary />

					<WeatherInfo>
						<WeatherSearch>
							<LocationInput />
							<SearchButton />
						</WeatherSearch>

						{weather.name && (
							<>
								<RecentLocations />
								<WeatherDetails />
							</>
						)}
					</WeatherInfo>
				</Box>
			)}

			{error && <ErrorPage />}
		</Container>
	);
};

export default App;
