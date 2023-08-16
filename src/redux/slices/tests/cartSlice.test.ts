import cartReducer, { addItem, removeItem, increment, decrement, clearCart, setTotal, CartState, CartItem } from '../cartSlice';

const newItem: CartItem = {
	id:1,
	category:"chair",
	description:"Little Armchair Sheepskin",
	price:986,
	specs:"Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.",
	texture:"Sheep Skin",
	weight:"15kg",
	size:"150cm x 70cm",
	sale:30,
	count:2
}

const initialState: CartState = {
	cart: [],
	totalPrice: 0,
	totalCount: 0
}

describe('cartSlice', () => {
	it('should return default state when passed an empty action', () => {
		const result = cartReducer(undefined, { type: '' });

		expect(result).toEqual(initialState)
	})

	it('should add new item to cart with "addItem" action', () => {
		const action = { type: addItem.type, payload: newItem };

		const result = cartReducer(initialState, action);

		expect(result.cart[0]).toEqual(newItem);
	})

	it('should remove item from cart with "removeItem" action', () => {
		const cart: CartItem[] = [
			{
				id:2,
				category:"kitchen",
				description:"Pop-Up Toaster",
				price:45,
				specs:" The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
				texture:"Plastic",
				weight:"3.5kg",
				size:"20xm x 10cm",
				sale:30,
				count:1
			},
			newItem
		];

		const action = { type: removeItem.type, payload: newItem.id };

		const result = cartReducer({ cart, totalPrice: 0, totalCount: 0 }, action);

		expect(result.cart).toEqual([{
			id:2,
			category:"kitchen",
			description:"Pop-Up Toaster",
			price:45,
			specs:" The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
			texture:"Plastic",
			weight:"3.5kg",
			size:"20xm x 10cm",
			sale:30,
			count:1
		}]);
	})

	it('should increment item count with "increment" action', () => {
		const cart: CartItem[] = [newItem];
		const action = { type: increment.type, payload: newItem };

		const result = cartReducer({ cart: cart, totalPrice: 0, totalCount: 0 }, action);

		expect(result.cart[0].count).toEqual(3);
	})

	it('should decrement item count with "decrement" action', () => {
		const cart: CartItem[] = [newItem];
		const action = { type: decrement.type, payload: newItem };

		const result = cartReducer({ cart: cart, totalPrice: 0, totalCount: 0 }, action);

		expect(result.cart[0].count).toEqual(1);
	})

	it('should clear state with "clearCart" action', () => {
		const state = {
			cart: [newItem],
			totalPrice: 1972,
			totalCount: 2
		}
		const action = { type: clearCart.type, payload: '' };

		const result = cartReducer(state, action);

		expect(result).toEqual(initialState);
	})
})