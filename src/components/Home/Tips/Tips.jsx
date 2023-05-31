import React from 'react';

import styles from 'scss/modules/Home/Tips/Tips.module.scss';

import Carousel from './Elements/Carousel';

function Tips() {
	return (
		<section className={styles.tips}>
			<div className='container'>
				<h2 className={styles.title}>Tips & Tricks</h2>

				<Carousel />
			</div>
		</section>
	)
}

export default Tips;
