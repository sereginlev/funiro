import React from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/modules/Home/Products/Products.module.scss';

import List from './Elements/List';

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

const Products: React.FC = () => {

	return (
		<motion.section
			className={styles.products}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			variants={blockAnimation}
		>
			<div className='container'>
				<div className={styles.block}>
					<h2 className={styles.title}>Our Products</h2>

					<List />
				</div>
			</div>
		</motion.section>
	)
}

export default Products;