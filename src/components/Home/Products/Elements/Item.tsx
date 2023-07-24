import React from 'react';

import styles from 'scss/modules/Home/Products/Elements/Item.module.scss';

import Info from './Info';
import Badge from './Badge';
import Back from './Back';

type ItemProps = {
	images: string[];
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

const Item: React.FC<ItemProps> = ({ images, ...product }) => {
	const [back, setBack] = React.useState<boolean>(false);

	return (
		<li className={styles.item} onMouseLeave={() => setBack(false)}>
			{
				back ?
					<Back {...product} />
					:
					<>
					{
						images &&
						<div className={styles.block} onMouseEnter={() => setBack(true)}>
							<img className={styles.image} src={images[0]}   alt={product.description} />
						</div>
					}
						<Info {...product} />

						<Badge {...product} />
					
					</>
			}
		</li>
	)
}

export default Item;
