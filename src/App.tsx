import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from 'hook';

import { fetchProducts } from 'redux/slices/productsSlice';
import { setWindowWidth } from 'redux/slices/windowWidthSlice';
import { fetchSlider } from 'redux/slices/sliderSlice';

import Home from 'pages/Home';
import Product from 'pages/Product';
import Categories from 'pages/Categories';
import Item from 'components/Home/Products/Elements/Item';

import './scss/index.scss';

const App: React.FC = () => {
	const dispatch = useAppDispatch();

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
			<Route path='/' element={<Home />} />
			<Route path='/product/:id' element={<Product />} />
			<Route path='/categories/' element={<Categories />}>
				<Route path=':category' element={<Item images={[]} id={0} category={''} description={''} price={0} specs={''} texture={''} weight={''} size={''} />}/>
			</Route>
		</Routes>
	);
}

export default App;
