import React from 'react';
import { CartItem } from 'redux/slices/cartSlice';

import styles from 'scss/modules/Product/Elements/Info/Info.module.scss';

import Price from './Price';

type InfoProps = {
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

const Info: React.FC<InfoProps> = ({ ...props }) => {

	return (
		<div className={styles.block}>
			<h3 className={styles.description}>{props.description}</h3>

			<p className={styles.text}>{props.specs}</p>

			<Price {...props} />
		</div>
	)
}

export default Info;
