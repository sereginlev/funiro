import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSlider = createAsyncThunk(
	'slider/fetchSlider',
	async (_, rejectWithValue) => {
		try {
			const { data } = await axios.get('https://638fbe939cbdb0dbe32fe47d.mockapi.io/slider');

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

const initialState = {
	slider: [],
	status: ''
}

export const sliderSlice = createSlice({
	name: 'slider',
	initialState,
	reducers: {
	},
	extraReducers: {
		[fetchSlider.pending]: (state) => {
			state.status = 'loading';
			state.slider = [];
		},
		[fetchSlider.fulfilled]: (state, action) => {
			state.status = 'success';
			state.slider = action.payload;
		},
		[fetchSlider.rejected]: (state) => {
			state.status = 'error';
			state.slider = [];
		}
	}
});

export const { } = sliderSlice.actions;

export default sliderSlice.reducer;