import React from 'react';
import { useAppSelector } from 'hook';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Hero/Elements/Carousel/Slide.module.scss';

import img1 from 'assets/main-slider/01.jpg';
import img2 from 'assets/main-slider/02.jpg';
import img3 from 'assets/main-slider/03.jpg';

type SlideProps = {
	currentIndex: number;
}

const Slide: React.FC<SlideProps> = ({ currentIndex }) => {
	const { slider } = useAppSelector(state => state.slider);

	const [images, setImages] = React.useState<string[]>([`url(${img1})`, `url(${img2})`, `url(${img3})`])

	return (
		<>
			{
				slider.length > 1 &&
				<div className={styles.slide} style={{ backgroundImage: images[currentIndex] }}>
					<div className={styles.info}>
						<h3 className={styles.title}>{slider[currentIndex].title}</h3>
						<p className={styles.text}>{slider[currentIndex].text}</p>
						<span className={styles.price}>€ {slider[currentIndex].price}</span>
						<Link className={styles.link} to='/'>
							<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.4697 0.46967C12.1768 0.762563 12.1768 1.23744 12.4697 1.53033L17.1893 6.25H1C0.585787 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585787 7.75 1 7.75H17.1893L12.4697 12.4697C12.1768 12.7626 12.1768 13.2374 12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303L19.5303 7.53033C19.8232 7.23744 19.8232 6.76256 19.5303 6.46967L13.5303 0.46967C13.2374 0.176777 12.7626 0.176777 12.4697 0.46967Z" fill="black" />
							</svg>
						</Link>
					</div>
				</div>
			}
		</>
	)
}

export default Slide;
