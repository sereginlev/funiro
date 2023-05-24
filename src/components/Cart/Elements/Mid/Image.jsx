import React from 'react';

import styles from 'scss/modules/Cart/Elements/Mid/Image.module.scss';

function Image({ ...item }) {
	return (
		<div className={styles.image}>
			<img className={styles.item} src={item.img} alt={item.description} />
		</div>
	)
}

export default Image;
