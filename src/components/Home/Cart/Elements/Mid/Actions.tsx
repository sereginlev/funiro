import React from 'react';
import { useAppDispatch } from 'hook';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Actions.module.scss';

import { increment, decrement, removeItem, setTotal } from 'redux/slices/cartSlice';

type ActionsProps = {
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

const Actions: React.FC<ActionsProps> = ({ ...item }) => {
	const dispatch = useAppDispatch();

	const handleIncrement = (item: ActionsProps): void => {
		dispatch(increment({ ...item }));
		dispatch(setTotal());
	}

	const handleDecrement = (item: ActionsProps): void => {
		dispatch(decrement({ ...item }));
		dispatch(setTotal());
	}

	const handleRemoveItem = (id: number): void => {
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
