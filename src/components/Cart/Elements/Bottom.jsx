import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Cart/Elements/Bottom.module.scss';

function Bottom() {
	const { totalPrice } = useSelector(state => state.cart);

	return (
		<div className={styles.bottom}>
			<h4 className={styles.title}>Total price: € {totalPrice}</h4>

			<a href='#' className={styles.button}>Go to checkout</a>
		</div>
	)
}

export default Bottom
