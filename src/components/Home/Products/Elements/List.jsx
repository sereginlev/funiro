import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Products/Elements/List.module.scss';

import Item from './Item';

function List() {
	const [count, setCount] = React.useState(8);
	const { products } = useSelector(state => state.products);

	return (
		<>
			<ul className={styles.list}>
				{
					products.map((product, index) => (
						index < count &&
						<Item {...product} key={product.id} />
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
