import React from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/modules/Home/Tips/Tips.module.scss';

import Carousel from './Elements/Carousel';

function Tips() {
	const blockAnimation = {
		hidden: {
			y: 100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: { property: 'all', duration: 0.5 }
		}
	}

	return (
		<section className={styles.tips}>
			<div className='container'>
				<motion.div
					className={styles.block}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					variants={blockAnimation}
				>
					<h2 className={styles.title}>Tips & Tricks</h2>

					<Carousel />
				</motion.div>

			</div>
		</section>
	)
}

export default Tips;
