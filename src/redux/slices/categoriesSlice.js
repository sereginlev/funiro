import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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