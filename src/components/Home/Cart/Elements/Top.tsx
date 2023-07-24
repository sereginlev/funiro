import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Cart/Elements/Top.module.scss';

import { clearCart } from 'redux/slices/cartSlice';

type TopProps = {
	setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const Top: React.FC<TopProps> = ({ setOpenCart }) => {
	const dispatch = useAppDispatch();

	const { totalCount, cart } = useAppSelector(state => state.cart);

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
