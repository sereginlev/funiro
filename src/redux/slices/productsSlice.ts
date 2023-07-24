import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<ProductItem[]>('https://638fbe939cbdb0dbe32fe47d.mockapi.io/products');
			
			return data as ProductItem[];
		} catch (error: any) {
			alert('Server Error! Please, try again.')
			return rejectWithValue(error.message);
		}	
	}
)

export type ProductItem = {
	id: number;
	category: string;
	description: string;
	price: number;
	images: string[];
	specs: string;
	texture: string;
	weight: string;
	size: string;
	sale?: number;
	isNew?: boolean;
	count: number;
}

interface ProductsState {
	products: ProductItem[];
	status: Status;
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

const initialState: ProductsState = {
	products: [],
	status: Status.LOADING
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = Status.LOADING;
				state.products = [];
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = Status.ERROR;
				state.products = [];
			})
		}
});

export const { } = productsSlice.actions;

export default productsSlice.reducer;
