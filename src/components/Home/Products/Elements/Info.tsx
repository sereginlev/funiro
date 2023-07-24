import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Products/Elements/Info.module.scss';

type InfoProps = {
	id: number;
	category: string;
	description: string;
	price: number;
	sale?: number;
}

const Info: React.FC<InfoProps> = ({ id, description, category, price, sale }) => {

	return (
		<Link className={styles.info} to={`/product/${id}`}>
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
