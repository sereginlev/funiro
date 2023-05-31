import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import styles from 'scss/modules/Product/Elements/Trends/Trends.module.scss';

import Arrows from './Arrows';
import Item from './Item';

const blockAnimation = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: { property: 'all', duration: 1 }
	}
}

function Trends() {
	const [startIndex, setStartIndex] = React.useState(0);
	const [endIndex, setEndIndex] = React.useState(3);

	const { products } = useSelector(state => state.products);

	return (
		<motion.section
			className={styles.trends}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.3, once: true }}
			variants={blockAnimation}
		>
			<div className='container'>
				<div className={styles.header}>
					<h2 className={styles.title}>Trending now</h2>

					<Arrows startIndex={startIndex} endIndex={endIndex} setStartIndex={setStartIndex} setEndIndex={setEndIndex} />
				</div>

				<ul className={styles.list}>
					{
						products.map((product, index) => (
							index >= startIndex && index <= endIndex &&
							<Item {...product} />
						))
					}
				</ul>
			</div>
		</motion.section >
	)
}

export default Trends;
