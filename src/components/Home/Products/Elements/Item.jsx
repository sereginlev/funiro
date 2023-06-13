import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Products/Elements/Item.module.scss';

import Info from './Info';
import Badge from './Badge';
import Back from './Back';

function Item({ images, ...product }) {
	const [back, setBack] = React.useState(false);

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
							<img className={styles.image} src={images[0]}   alt={product.title} />
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
