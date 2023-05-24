import React from 'react';
import { useDispatch } from 'react-redux';

import styles from 'scss/modules/Cart/Elements/Mid/Actions.module.scss';

import { increment, decrement, removeItem } from 'redux/slices/cartSlice';

function Actions({ ...item }) {
	const dispatch = useDispatch();

	return (
		<div className={styles.actions}>
			<div className={styles.counter}>
				<span className={[styles.badge, styles.minus].join(' ')} onClick={() => dispatch(decrement({ ...item }))}>-</span>
				<span className={styles.count}>{item.count}</span>
				<span className={styles.badge} onClick={() => dispatch(increment({ ...item }))}>+</span>
			</div>

			<i className="fa-regular fa-trash-can" onClick={() => dispatch(removeItem(item.id))}></i>
		</div>
	)
}

export default Actions
