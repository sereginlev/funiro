import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Products/Elements/Info.module.scss';

function Info({ description, category, price, sale }) {

	return (
		<Link className={styles.info} to='/'>
			<h4 className={styles.description}>{description}</h4>
			<p className={styles.category}>{category.toUpperCase()}</p>

			<div className={styles.block}>
				<span className={styles.newPrice}>
					€ {sale ? Math.floor(price - (price * (sale / 100))) : price}
				</span>

				{
					sale &&
						<span className={styles.price}>€ {price}</span>
				}
			</div>
		</Link>
	)
}

export default Info;
