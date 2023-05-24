import React from 'react';

import styles from 'scss/modules/Hero/Hero.module.scss';

import Carousel from './Elements/Carousel/Carousel';
import Description from './Elements/Description';

function Hero() {

	return (
		<div className={styles.heroWrapper}>
			<div className='container'>
				<section className={styles.hero}>
					{/* <div className={styles.bg}></div> */}
					<Description />
					<Carousel />
				</section>
			</div>
		</div>
	)
}

export default Hero;
