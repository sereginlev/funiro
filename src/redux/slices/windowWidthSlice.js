import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	windowWidth: window.innerWidth
}

export const windowWidthSlice = createSlice({
	name: 'windowWidth',
	initialState,
	reducers: {
		setWindowWidth (state, action) {
			state.windowWidth = action.payload;
		}
	},
});

export const { setWindowWidth } = windowWidthSlice.actions;

export default windowWidthSlice.reducer;
