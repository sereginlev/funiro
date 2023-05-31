import React from 'react';
import { useDispatch } from 'react-redux';

import styles from 'scss/modules/Product/Elements/Info/Price.module.scss';

import { addItem, increment, decrement, setTotal } from 'redux/slices/cartSlice';

function Price({ ...props }) {
	const dispatch = useDispatch();

	const [count, setCount] = React.useState(1);

	const handleIncrement = (props) => {
		if (props.count) {
			dispatch(increment(props));
			dispatch(setTotal());
		} else {
			setCount(count + 1);
		}
	}

	const handleDecrement = () => {
		if (props.count) {
			dispatch(decrement(props));
			dispatch(setTotal());
		} else if (props.count === 1 || count === 1) {
			return
		} else {
			setCount(count - 1);
		}
	}

	const handleAddItem = (item) => {
		dispatch(addItem(item));
		dispatch(setTotal());
	}

	return (
		<>
			<div className={styles.price}>
				<div className={styles.counter}>
					<span className={styles.quantity}>Quantity:</span>

					<span className={[styles.badge, styles.minus].join(' ')} onClick={() => handleDecrement({ ...props })}>-</span>

					<span className={styles.count}>
						{props.count ? props.count : count}
					</span>

					<span className={styles.badge} onClick={() => handleIncrement({ ...props })}>+</span>
				</div>

				<span className={styles.total}>
					€ {props.count ? (props.price * props.count) : (props.price * count)}
				</span>
			</div>

			<div className={styles.buttons}>
				<button className={styles.add} type='button' onClick={() => handleAddItem({ ...props, count: count })}>Add to cart</button>
				<button className={styles.buy} type='button'>Buy now</button>
			</div>
		</>

	)
}

export default Price;