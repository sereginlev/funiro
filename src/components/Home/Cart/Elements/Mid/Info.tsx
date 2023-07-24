import React from 'react';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Info.module.scss';

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

const Info: React.FC<InfoProps> = ({ ...item }) => {
	return (
		<div className={styles.info}>
			<h4 className={styles.description}>{item.description}</h4>
			<span className={styles.price}>€ {item.price * item.count}</span>
		</div>
	)
}

export default Info;
