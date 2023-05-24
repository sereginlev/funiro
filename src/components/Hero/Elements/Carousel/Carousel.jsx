import React from 'react';

import styles from 'scss/modules/Hero/Elements/Carousel/Carousel.module.scss';

import Arrows from './Arrows';
import Dots from './Dots';
import Slide from './Slide';

function Carousel() {
	const [currentIndex, setCurrentIndex] = React.useState(0);

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
