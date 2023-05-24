import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchProducts } from 'redux/slices/productsSlice';
import { setWindowWidth } from 'redux/slices/windowWidthSlice';
import { fetchSlider } from 'redux/slices/sliderSlice';

import Home from 'pages/Home';

import './scss/index.scss';

function App() {
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchSlider());

		const handleWidth = () => {
			dispatch(setWindowWidth(window.innerWidth));
		}

		window.addEventListener('resize', handleWidth);

		return () => window.removeEventListener('resize', handleWidth);
	}, [])

	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
		</Routes>
	);
}

export default App;
