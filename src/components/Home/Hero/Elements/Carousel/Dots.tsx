import React, { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Hero/Elements/Carousel/Dots.module.scss';

type CarouselProps = {
	setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Dots: React.FC<CarouselProps> = ({ setCurrentIndex }) => {
	const { slider } = useAppSelector(state => state.slider);

	const goToSlide = (index: number) => {
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
