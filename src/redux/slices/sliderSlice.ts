import { Status } from './productsSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSlider = createAsyncThunk(
	'slider/fetchSlider',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<SliderItem[]>('https://638fbe939cbdb0dbe32fe47d.mockapi.io/slider');

			return data as SliderItem[];
		} catch(error: any) {
			alert('Server Error! Please, try again.')
			return rejectWithValue(error.message)
		}
	}
)

type SliderItem = {
	id: number;
	img: string;
	title: string;
	text: string;
	price: number;
}

interface SliderState {
	slider: SliderItem[];
	status: Status;
}

const initialState: SliderState = {
	slider: [],
	status: Status.LOADING
}

export const sliderSlice = createSlice({
	name: 'slider',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder	
			.addCase(fetchSlider.pending, (state) => {
				state.status = Status.LOADING;
				state.slider = [];
			})
			.addCase(fetchSlider.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.slider = action.payload;
			})
			.addCase(fetchSlider.rejected, (state) => {
				state.status = Status.ERROR;
				state.slider = [];
			})
	}
});

export const { } = sliderSlice.actions;

export default sliderSlice.reducer;