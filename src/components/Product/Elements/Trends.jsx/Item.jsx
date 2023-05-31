import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Product/Elements/Trends/Item.module.scss';

function Item({ ...product }) {
	return (
		<li className={styles.item} key={product.id} onClick={() => window.scrollTo(0, 0)}>
			<Link className={styles.link} to={`/product/${product.id}`}>
				<div className={styles.image}>
					<img src={product.images[0]} alt={product.description} />
				</div>

				<div className={styles.info}>
					<h4 className={styles.description}>{product.description}</h4>
					<span className={styles.price}>€ {product.price}</span>
				</div>
			</Link>
		</li>
	)
}

export default Item;
