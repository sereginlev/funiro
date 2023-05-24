import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from 'scss/modules/Cart/Elements/Top.module.scss';

import { clearCart } from 'redux/slices/cartSlice';

function Top({ setOpenCart }) {
	const dispatch = useDispatch();

	const { totalCount, cart } = useSelector(state => state.cart);

	return (
		<div className={styles.top}>
			<h2 className={styles.title}>Your Shopping Cart ({totalCount})</h2>

			{
				cart.length >= 1 &&
				<button className={styles.button} onClick={() => dispatch(clearCart())}>Clear cart</button>
			}

			<i className="fa-solid fa-xmark" onClick={() => setOpenCart(false)}></i>
		</div>
	)
}

export default Top;
