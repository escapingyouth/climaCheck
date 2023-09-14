import { useState, useEffect } from 'react';

function useWeather(apiKey) {
	const [state, setState] = useState({
		location: '',
		backgroundUrl: '/background.webp',
		weather: {},
		isLoading: false,
		error: null,
		recentLocations: JSON.parse(localStorage.getItem('recentLocations')) || []
	});

	const {
		location,
		backgroundUrl,
		weather,
		isLoading,
		error,
		recentLocations
	} = state;

	useEffect(() => {
		localStorage.setItem('recentLocations', JSON.stringify(recentLocations));
	}, [recentLocations]);

	const handleSetLocation = (e) => {
		setState((prevState) => ({ ...prevState, location: e.target.value }));
	};

	const handleAddToRecentLocations = (newLocation) => {
		if (recentLocations[recentLocations.length - 1] !== newLocation) {
			setState((prevState) => ({
				...prevState,
				recentLocations: [...recentLocations, newLocation]
			}));
		}
	};

	const fetchWeatherData = async () => {
		if (location.length < 3) {
			setState((prevState) => ({ ...prevState, weather: {}, error: null }));
			alert('Location length must be greater than 2 characters');
			return;
		}

		setState((prevState) => ({ ...prevState, isLoading: true, error: null }));

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
			);

			if (!response.ok) {
				throw new Error('Failed to fetch weather information');
			}

			const data = await response.json();

			if (data.cod === '404') {
				throw new Error('Location not found');
			}

			const {
				name,
				weather: [{ description, icon }],
				main: { temp, humidity, pressure },
				wind: { speed },
				clouds: { all: cloudiness },
				dt,
				timezone
			} = data;

			setState((prevState) => ({
				...prevState,
				location: name,
				backgroundUrl: `https://source.unsplash.com/1600x900/?${name}`,
				weather: {
					name,
					description,
					temp,
					humidity,
					speed,
					icon,
					pressure,
					cloudiness,
					dt,
					timezone
				},
				isLoading: false,
				error: null
			}));

			handleAddToRecentLocations(name);
		} catch (error) {
			setState((prevState) => ({
				...prevState,
				error: error.message,
				isLoading: false
			}));
			console.log(error);
		}
	};

	return {
		location,
		backgroundUrl,
		weather,
		isLoading,
		error,
		recentLocations,
		handleSetLocation,
		fetchWeatherData
	};
}

export default useWeather;
