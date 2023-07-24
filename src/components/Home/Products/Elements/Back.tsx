import React from 'react';
import { useAppDispatch } from 'hook';

import styles from 'scss/modules/Home/Products/Elements/Back.module.scss';

import { addItem, setTotal } from 'redux/slices/cartSlice';

type BackProps = {
	id: number;
	category: string;
	description: string;
	price: number;
	specs: string;
	texture: string;
	weight: string;
	size: string;
	count?: number;
	sale?: number;
	isNew?: boolean;
}

const Back: React.FC<BackProps> = ({ ...product }) => {
	const dispatch = useAppDispatch();

	const handleAddItem = (product: BackProps) => {
		dispatch(addItem({ ...product, count: 1 }));
		dispatch(setTotal());
	}

	return (
		<div className={styles.back}>
			<button className={styles.button} type='button' onClick={() => handleAddItem(product)}>Add to cart</button>

			<div className={styles.actions}>
				<button className={styles.block} type='button'>
					<svg className={styles.icon} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 14C14.212 14 13.5 14.31 12.966 14.807L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.088 16.308C12.0317 16.5344 12.0022 16.7667 12 17C12 17.5933 12.1759 18.1734 12.5056 18.6667C12.8352 19.1601 13.3038 19.5446 13.8519 19.7716C14.4001 19.9987 15.0033 20.0581 15.5853 19.9424C16.1672 19.8266 16.7018 19.5409 17.1213 19.1213C17.5409 18.7018 17.8266 18.1672 17.9424 17.5853C18.0581 17.0033 17.9987 16.4001 17.7716 15.8519C17.5446 15.3038 17.1601 14.8352 16.6667 14.5056C16.1734 14.1759 15.5933 14 15 14Z" fill="white" />
					</svg>
					<span className={styles.text}>Share</span>
				</button>

				<button className={styles.block} type='button'>
					<svg className={styles.icon} width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M11.9996 18.0226C7.35982 15.3882 4.76416 12.7626 3.50744 10.4739C2.22425 8.13698 2.3302 6.15452 3.05171 4.73901C4.52988 1.83903 8.73571 0.911189 11.2936 4.14628L11.9995 5.03912L12.7055 4.14632C15.2638 0.911117 19.4699 1.83909 20.948 4.73901C21.6695 6.1545 21.7754 8.13695 20.4921 10.4738C19.2353 12.7626 16.6395 15.3882 11.9996 18.0226ZM11.9996 2.24511C8.5199 -1.14383 3.33722 0.215237 1.44802 3.92158C0.419533 5.93934 0.400427 8.55527 1.92965 11.3402C3.44655 14.1028 6.47805 17.0306 11.5642 19.8418L11.9996 20.0825L12.4349 19.8419C17.5213 17.0307 20.5529 14.1028 22.0699 11.3403C23.5992 8.55529 23.5802 5.93935 22.5517 3.92158C20.6625 0.215172 15.4796 -1.14379 11.9996 2.24511Z" fill="#262F56" />
					</svg>

					<span className={styles.text}>Like</span>
				</button>
			</div>
		</div>
	)
}

export default Back;
