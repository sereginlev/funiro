import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
	id: number;
	category: string;
	description: string;
	price: number;
	specs: string;
	texture: string;
	weight: string;
	size: string;
	count: number;
	sale?: number;
	isNew?: boolean;
}

interface CartState {
	cart: CartItem[];
	totalPrice: number;
	totalCount: number;
}

const initialState: CartState = {
	cart: [],
	totalPrice: 0,
	totalCount: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem (state, action: PayloadAction<CartItem>) {
			const findItem = state.cart.find(item => item.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.cart.push({
					...action.payload,
					count: action.payload.count	
				})
			};
		},
		removeItem (state, action: PayloadAction<number>) {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
		increment (state, action: PayloadAction<CartItem>) {
			for (let i = 0; i < state.cart.length; i++) {
				if (state.cart[i].id === action.payload.id) {
					state.cart[i].count++;
				}
			}
		},
		decrement (state, action: PayloadAction<CartItem>) {
			for (let i = 0; i < state.cart.length; i++) {
				if (state.cart[i].id === action.payload.id) {
					state.cart[i].count--;
				}

				if (state.cart[i].count === 0) {
					state.cart = state.cart.filter(item => item.id !== action.payload.id);
				}
			}
		},
		clearCart (state) {
			state.cart = [];
			state.totalCount = 0;
			state.totalPrice = 0;
		},
		setTotal (state) {
			state.totalPrice = state.cart.reduce((sum, item) => {
				return sum + (item.price * item.count);
			}, 0);

			state.totalCount = state.cart.reduce((sum, item) => {
				return sum + item.count;
			}, 0);
		}
	}
});

export const { addItem, removeItem, increment, decrement, clearCart, setTotal } = cartSlice.actions;

export default cartSlice.reducer;