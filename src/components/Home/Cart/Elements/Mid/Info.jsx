import React from 'react';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Info.module.scss';

function Info({ ...item }) {
	return (
		<div className={styles.info}>
			<h4 className={styles.description}>{item.description}</h4>
			<span className={styles.price}>€ {item.price * item.count}</span>
		</div>
	)
}

export default Info;
