import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Cart/Cart.module.scss';

import Top from './Elements/Top';
import Empty from './Elements/Empty';
import Mid from './Elements/Mid/Mid';
import Bottom from './Elements/Bottom';

function Cart({ setOpenCart }) {
	const { cart } = useSelector(state => state.cart);

	return (
		<section className={styles.cart}>
			{
				cart.length === 0 ?

					<div className={styles.block}>
						<Top setOpenCart={setOpenCart} />

						<Empty setOpenCart={setOpenCart} />
					</div>
					:
					<div className={styles.block}>
						<Top setOpenCart={setOpenCart} />

						<Mid />

						<Bottom />
					</div>
			}
		</section>
	)
}

export default Cart;
