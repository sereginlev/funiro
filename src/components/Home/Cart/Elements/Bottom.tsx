import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Cart/Elements/Bottom.module.scss';

const Bottom: React.FC = () => {
	const { totalPrice } = useAppSelector(state => state.cart);

	return (
		<div className={styles.bottom}>
			<h4 className={styles.title}>Total price: € {totalPrice}</h4>

			<a href='#' className={styles.button}>Go to checkout</a>
		</div>
	)
}

export default Bottom
