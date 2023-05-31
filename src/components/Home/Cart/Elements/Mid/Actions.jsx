import React from 'react';
import { useDispatch } from 'react-redux';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Actions.module.scss';

import { increment, decrement, removeItem, setTotal } from 'redux/slices/cartSlice';

function Actions({ ...item }) {
	const dispatch = useDispatch();

	const handleIncrement = (item) => {
		dispatch(increment({ ...item }));
		dispatch(setTotal());
	}

	const handleDecrement = (item) => {
		dispatch(decrement({ ...item }));
		dispatch(setTotal());
	}

	const handleRemoveItem = (id) => {
		dispatch(removeItem(id));
		dispatch(setTotal());
	}

	return (
		<div className={styles.actions}>
			<div className={styles.counter}>
				<span className={[styles.badge, styles.minus].join(' ')} onClick={() => handleDecrement(item)}>-</span>
				<span className={styles.count}>{item.count}</span>
				<span className={styles.badge} onClick={() => handleIncrement(item)}>+</span>
			</div>

			<i className="fa-regular fa-trash-can" onClick={() => handleRemoveItem(item.id)}></i>
		</div>
	)
}

export default Actions
