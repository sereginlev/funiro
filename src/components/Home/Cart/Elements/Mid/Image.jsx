import React from 'react';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Image.module.scss';

function Image({ ...item }) {
	return (
		<div className={styles.image}>
			<img className={styles.item} src={item.images[0]} alt={item.description} />
		</div>
	)
}

export default Image;
