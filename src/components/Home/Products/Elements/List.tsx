import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Products/Elements/List.module.scss';

import Item from './Item';

const List: React.FC = () => {
	const [count, setCount] = React.useState<number>(8);

	const { products } = useAppSelector(state => state.products);

	const { images } = useAppSelector(state => state.images);

	return (
		<>
			<ul className={styles.list}>
				{
					products.map((product, index) => (
						index < count &&
						<Item {...product} key={product.id} images={images[index]} />				
					))
				}
			</ul>

			{
				count < products.length &&
				<button className={styles.button} type='button' onClick={() => setCount(count + 8)}>Show more</button>
			}

		</>

	)
}

export default List;
