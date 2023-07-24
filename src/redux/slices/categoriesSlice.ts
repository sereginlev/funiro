import { createSlice } from '@reduxjs/toolkit';

interface CategoriesState {
	categories: string[];
	rooms: string[];
}

const initialState: CategoriesState = {
	categories: ['All', 'Chair', 'Kitchen', 'Lamp', 'Skin-care', 'Furniture', 'Electronic'],
	rooms: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom']
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
	}
});

export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;