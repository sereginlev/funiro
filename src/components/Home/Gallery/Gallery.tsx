import React from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/modules/Home/Gallery/Gallery.module.scss';

import img1 from 'assets/furniture/01.jpg';
import img2 from 'assets/furniture/02.jpg';
import img3 from 'assets/furniture/03.jpg';
import img4 from 'assets/furniture/04.jpg';
import img5 from 'assets/furniture/05.jpg';
import img6 from 'assets/furniture/06.jpg';
import img7 from 'assets/furniture/07.jpg';
import img8 from 'assets/furniture/08.jpg';
import img9 from 'assets/furniture/09.jpg';

const Gallery: React.FC = () => {
	const blockAnimation = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { property: 'all', duration: 1 }
		}
	}

	return (
		<section className={styles.gallery} id='gallery'>
			<p className={styles.subtitle}>Share your setup with</p>
			<h2 className={styles.title}>#FuniroFurniture</h2>

			<motion.div
				className={styles.block}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.2, once: true }}
				variants={blockAnimation}
			>
				<div className={styles.left}>
					<div className={styles.leftTop}>
						<img className={styles.img1} src={img1} alt='Furniture image' />
						<img className={styles.img2} src={img2} alt='Furniture image' />
					</div>

					<div className={styles.leftBottom}>
						<img className={styles.img3} src={img3} alt='Furniture image' />
						<img className={styles.img4} src={img4} alt='Furniture image' />
					</div>
				</div>

				<div className={styles.center}>
					<img className={styles.img5} src={img5} alt='Furniture image' />
				</div>

				<div className={styles.right}>
					<div className={styles.rightTop}>
						<img className={styles.img6} src={img6} alt='Furniture image' />
						<img className={styles.img7} src={img7} alt='Furniture image' />
					</div>

					<div className={styles.rightBottom}>
						<img className={styles.img8} src={img8} alt='Furniture image' />
						<img className={styles.img9} src={img9} alt='Furniture image' />
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Gallery;
