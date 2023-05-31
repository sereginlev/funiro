import React from 'react';

import quality from 'assets/advantages/01.svg';
import warranty from 'assets/advantages/02.svg';
import shipping from 'assets/advantages/03.svg';
import support from 'assets/advantages/04.svg';

import styles from 'scss/modules/Home/Features/Features.module.scss';

function Features() {
	const [items, setItems] = React.useState([
		{ title: 'High Quality', text: 'Crafted from top materials', icon: quality },
		{ title: 'Warrany Protection', text: 'Over 2 years', icon: warranty },
		{ title: 'Free Shipping', text: 'Order over 150 $', icon: shipping },
		{ title: '24 / 7 Support', text: 'Dedicated support', icon: support }
	])
	return (
		<section className={styles.features}>
			<div className='container'>
				<ul className={styles.list}>
					{
						items.map((item, index) => (
							<li className={styles.item} key={index}>
								<img className={styles.icon} src={item.icon} alt={`${item.title} icon`} />

								<div className={styles.info}>
									<h4 className={styles.title}>{item.title}</h4>
									<p className={styles.text}>{item.text}</p>
								</div>
							</li>
						))
					}

				</ul>
			</div>
		</section>
	)
}

export default Features;
