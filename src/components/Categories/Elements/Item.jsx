import React from 'react';

import styles from 'scss/modules/Home/Products/Elements/Item.module.scss';

import Info from 'components/Home/Products/Elements/Info';
import Badge from 'components/Home/Products/Elements/Badge';

function Item({ ...product }) {
	return (
		<li className={styles.item}>
			<div className={styles.block}>
				<img className={styles.image} src={product.images[0]} alt={product.title} />
			</div>

			<Info {...product} />

			<Badge {...product} />
		</li>
	)
}

export default Item
