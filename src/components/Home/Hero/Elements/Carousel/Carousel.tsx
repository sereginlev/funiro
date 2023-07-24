import React from 'react';

import styles from 'scss/modules/Home/Hero/Elements/Carousel/Carousel.module.scss';

import Arrows from './Arrows';
import Dots from './Dots';
import Slide from './Slide';

const Carousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = React.useState<number>(0);

	return (
		<article className={styles.slider}>
			<div className={styles.nav}>
				<div className={styles.empty}></div>

				<Dots setCurrentIndex={setCurrentIndex} />

				<Arrows currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
			</div>

			<Slide currentIndex={currentIndex} />
		</article>
	)
}

export default Carousel;
