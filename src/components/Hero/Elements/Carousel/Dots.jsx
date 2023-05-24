import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Hero/Elements/Carousel/Dots.module.scss';

function Dots({ setCurrentIndex }) {
	const { slider } = useSelector(state => state.slider);

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div className={styles.dots}>
			{
				slider.map((slide, index) => (
					<button className={styles.dot} key={index} onClick={() => goToSlide(index)} type='button'></button>
				))}
		</div>
	)
}

export default Dots;
