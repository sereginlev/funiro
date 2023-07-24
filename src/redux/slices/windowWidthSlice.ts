import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowWidthState {
	windowWidth: number;
}

const initialState: WindowWidthState = {
	windowWidth: window.innerWidth
}

export const windowWidthSlice = createSlice({
	name: 'windowWidth',
	initialState,
	reducers: {
		setWindowWidth (state, action: PayloadAction<number>) {
			state.windowWidth = action.payload;
		}
	},
});

export const { setWindowWidth } = windowWidthSlice.actions;

export default windowWidthSlice.reducer;
