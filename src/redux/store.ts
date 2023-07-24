import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import products from './slices/productsSlice';
import windowWidth from './slices/windowWidthSlice';
import slider from './slices/sliderSlice';
import cart from './slices/cartSlice';
import categories from './slices/categoriesSlice';
import images from './slices/imagesSlice';

export const store = configureStore({
	reducer: {
		products,
		windowWidth,
		slider,
		cart,
		categories,
		images
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
