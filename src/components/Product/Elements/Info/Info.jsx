import React from 'react';

import styles from 'scss/modules/Product/Elements/Info/Info.module.scss';

import Price from './Price';

function Info({ ...props }) {

	return (
		<div className={styles.block}>
			<h3 className={styles.description}>{props.description}</h3>

			<p className={styles.text}>{props.specs}</p>

			<Price {...props} />
		</div>
	)
}

export default Info;
