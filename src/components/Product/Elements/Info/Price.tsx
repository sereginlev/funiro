import React from 'react';
import { useAppDispatch } from 'hook';

import styles from 'scss/modules/Product/Elements/Info/Price.module.scss';

import { addItem, increment, decrement, setTotal, CartItem } from 'redux/slices/cartSlice';

type PriceProps = {
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

const Price: React.FC<PriceProps> = ({ ...props }) => {
	const dispatch = useAppDispatch();

	const [count, setCount] = React.useState<number>(1);

	const handleIncrement = (props: CartItem) => {
		if (props.count) {
			dispatch(increment(props));
			dispatch(setTotal());
		} else {
			setCount(count + 1);
		}
	}

	const handleDecrement = (props: CartItem) => {
		if (props.count) {
			dispatch(decrement(props));
			dispatch(setTotal());
		} else if (props.count === 1 || count === 1) {
			return
		} else {
			setCount(count - 1);
		}
	}

	const handleAddItem = (item: CartItem) => {
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