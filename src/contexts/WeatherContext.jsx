import { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWeather from '../customHooks/useWeather';

const WeatherContext = createContext();

WeatherProvider.propTypes = {
	children: PropTypes.node
};

const apiKey = import.meta.env.VITE_API_KEY;

function WeatherProvider({ children }) {
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

	useEffect(() => {
		function callback(e) {
			if (e.code === 'Enter') {
				fetchWeatherData();
			}
		}
		document.addEventListener('keydown', callback);

		return () => document.removeEventListener('keydown', callback);
	}, [fetchWeatherData]);

	return (
		<WeatherContext.Provider
			value={{
				location,
				backgroundUrl,
				weather,
				isLoading,
				error,
				recentLocations,
				handleSetLocation,
				fetchWeatherData
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
}

function useWeatherContext() {
	const context = useContext(WeatherContext);
	if (context === undefined)
		throw new Error('Weather context was used outside of weather provider');
	return context;
}

export { WeatherProvider, useWeatherContext };
