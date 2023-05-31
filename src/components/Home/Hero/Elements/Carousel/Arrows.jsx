import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Hero/Elements/Carousel/Arrows.module.scss';

function Arrows({ currentIndex, setCurrentIndex }) {
	const { slider } = useSelector(state => state.slider);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slider.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className={styles.arrows}>
			<button className={[styles.arrow, styles.prev].join(' ')} onClick={goToPrevious} type='button'>
				<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13.4697 0.863701C13.8212 1.21517 13.8212 1.78502 13.4697 2.13649L7.63642 7.96983C7.46763 8.13861 7.23871 8.23343 7.00002 8.23343C6.76132 8.23343 6.53241 8.13861 6.36362 7.96983L0.530291 2.13649C0.178819 1.78502 0.178819 1.21517 0.530291 0.863701C0.881763 0.51223 1.45161 0.51223 1.80308 0.863702L7.00002 6.06064L12.197 0.863702C12.5484 0.51223 13.1183 0.51223 13.4697 0.863701Z" fill="#3A3A3A" />
				</svg>
			</button>

			<button className={[styles.arrow, styles.next].join(' ')} onClick={goToNext} type='button'>
				<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13.4697 0.863701C13.8212 1.21517 13.8212 1.78502 13.4697 2.13649L7.63642 7.96983C7.46763 8.13861 7.23871 8.23343 7.00002 8.23343C6.76132 8.23343 6.53241 8.13861 6.36362 7.96983L0.530291 2.13649C0.178819 1.78502 0.178819 1.21517 0.530291 0.863701C0.881763 0.51223 1.45161 0.51223 1.80308 0.863702L7.00002 6.06064L12.197 0.863702C12.5484 0.51223 13.1183 0.51223 13.4697 0.863701Z" fill="#3A3A3A" />
				</svg>
			</button>
		</div>
	)
}

export default Arrows;
