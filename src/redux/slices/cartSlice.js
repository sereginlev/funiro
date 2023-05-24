import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
	totalPrice: 0,
	totalCount: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem (state, action) {
			const findItem = state.cart.find(item => item.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.cart.push({
					...action.payload,
					count: 1	
				})
			};

			state.totalPrice = state.cart.reduce((sum, item) => {
				return sum + (item.price * item.count);
			}, 0);

			state.totalCount = state.cart.reduce((sum, item) => {
				return sum + item.count;
			}, 0);
		},
		removeItem (state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload);

			state.totalPrice = state.cart.reduce((sum, item) => {
				return sum + (item.price * item.count);
			}, 0);

			state.totalCount = state.cart.reduce((sum, item) => {
				return sum + item.count;
			}, 0);
		},
		increment (state, action) {
			for (let i = 0; i < state.cart.length; i++) {
				if (state.cart[i].id === action.payload.id) {
					state.cart[i].count++;
				}
			}

			state.totalPrice = state.cart.reduce((sum, item) => {
				return sum + (item.price * item.count);
			}, 0);

			state.totalCount = state.cart.reduce((sum, item) => {
				return sum + item.count;
			}, 0);
		},
		decrement (state, action) {
			for (let i = 0; i < state.cart.length; i++) {
				if (state.cart[i].id === action.payload.id) {
					state.cart[i].count--;
				}

				if (state.cart[i].count === 0) {
					state.cart = state.cart.filter(item => item.id !== action.payload.id);
				}
			}

			state.totalPrice = state.cart.reduce((sum, item) => {
				return sum + (item.price * item.count);
			}, 0);

			state.totalCount = state.cart.reduce((sum, item) => {
				return sum + item.count;
			}, 0);
		},
		clearCart (state) {
			state.cart = [];
			state.totalCount = 0;
			state.totalPrice = 0;
		}
	}
});

export const { addItem, removeItem, increment, decrement, clearCart } = cartSlice.actions;

export default cartSlice.reducer;