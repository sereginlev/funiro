import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Image.module.scss';

function Image({ index, ...item }) {
	const { images } = useSelector(state => state.images);

	return (
		<>
			{
				images &&
				<div className={styles.image}>
					<img className={styles.item} src={images[item.id - 1][0]} alt={item.description} />
				</div>
			}
		</>

	)
}

export default Image;
