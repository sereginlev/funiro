import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (_, rejectWithValue) => {
		try {
			const { data } = await axios.get('https://638fbe939cbdb0dbe32fe47d.mockapi.io/products');

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

const initialState = {
	products: [],
	status: ''
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.status = 'loading';
			state.products = [];
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.status = 'success';
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state) => {
			state.status = 'error';
			state.products = [];
		}
	}
});

export const { } = productsSlice.actions;

export default productsSlice.reducer;
