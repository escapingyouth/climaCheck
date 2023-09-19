import { useReducer } from 'react';

const initialState = {
	location: '',
	backgroundUrl: '/background.webp',
	weather: {},
	isLoading: false,
	error: null,
	recentLocations: JSON.parse(localStorage.getItem('recentLocations')) || []
};

function reducer(state, action) {
	switch (action.type) {
		case 'fetchWeatherStart':
			return { ...state, isLoading: true };

		case 'fetchWeatherSuccess': {
			const {
				name,
				weather: [{ description, icon }],
				main: { temp, humidity, pressure },
				wind: { speed },
				clouds: { all: cloudiness },
				dt,
				timezone
			} = action.payload;

			return {
				...state,
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
				isLoading: false
			};
		}
		case 'fetchWeatherFail':
			return { ...state, isLoading: false, error: action.payload };

		case 'setLocation':
			return { ...state, location: action.payload };

		case 'addToRecentLocations':
			if (
				state.recentLocations[state.recentLocations.length - 1] !==
				action.payload
			) {
				return {
					...state,
					recentLocations: [...state.recentLocations, action.payload]
				};
			}
			return state;

		default:
			throw new Error(`Unhandled action type of type ${action.type}`);
	}
}

import { useEffect } from 'react';

function useWeather(apiKey) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem(
			'recentLocations',
			JSON.stringify(state.recentLocations)
		);
	}, [state.recentLocations]);

	const handleSetLocation = (e) => {
		dispatch({ type: 'setLocation', payload: e.target.value });
	};

	const handleAddToRecentLocations = (newLocation) => {
		dispatch({ type: 'addToRecentLocations', payload: newLocation });
	};

	const fetchWeatherData = async () => {
		if (state.location.length < 3) {
			dispatch({ type: 'fetchWeatherSuccess', payload: {} });
			alert('Location length must be greater than 2 characters');
			return;
		}

		dispatch({ type: 'fetchWeatherStart' });

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${state.location}&appid=${apiKey}&units=metric`
			);

			if (!response.ok) {
				throw new Error('Failed to fetch weather information');
			}

			const data = await response.json();

			if (data.cod === '404') {
				throw new Error('Location not found');
			}

			dispatch({
				type: 'fetchWeatherSuccess',
				payload: data
			});

			handleAddToRecentLocations(data.name);
		} catch (error) {
			dispatch({ type: 'fetchWeatherFail', payload: error.message });
			console.log(error);
		}
	};

	return {
		...state,
		handleSetLocation,
		fetchWeatherData
	};
}

export default useWeather;
