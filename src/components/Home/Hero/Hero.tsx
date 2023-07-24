import React from 'react';

import styles from 'scss/modules/Home/Hero/Hero.module.scss';

import Carousel from './Elements/Carousel/Carousel';
import Description from './Elements/Description';

const Hero: React.FC = () => {

	return (
		<div className={styles.heroWrapper}>
			<div className='container'>
				<section className={styles.hero}>
					<Description />
					<Carousel />
				</section>
			</div>
		</div>
	)
}

export default Hero;
