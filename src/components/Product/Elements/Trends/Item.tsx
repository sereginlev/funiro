import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Product/Elements/Trends/Item.module.scss';

type ItemProps = {
	index: number;
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

const Item: React.FC<ItemProps> = ({ index, ...product }) => {
	const { images } = useAppSelector(state => state.images);

	return (
		<li className={styles.item} key={product.id} onClick={() => window.scrollTo(0, 0)}>
			<Link className={styles.link} to={`/product/${product.id}`}>
				{
					images &&
					<div className={styles.image}>
						<img src={images[index][0]} alt={product.description} />
					</div>
				}

				<div className={styles.info}>
					<h4 className={styles.description}>{product.description}</h4>
					<span className={styles.price}>€ {product.price}</span>
				</div>
			</Link>
		</li>
	)
}

export default Item;
