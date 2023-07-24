import React, { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Cart/Cart.module.scss';

import Top from './Elements/Top';
import Empty from './Elements/Empty';
import Mid from './Elements/Mid/Mid';
import Bottom from './Elements/Bottom';

type CartProps = {
	setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ setOpenCart }) => {
	const { cart } = useAppSelector(state => state.cart);

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
