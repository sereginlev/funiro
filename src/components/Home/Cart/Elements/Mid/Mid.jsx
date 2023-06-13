import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Cart/Elements/Mid/Mid.module.scss';

import Image from './Image';
import Info from './Info';
import Actions from './Actions';

function Mid() {
	const { cart } = useSelector(state => state.cart);

	return (
		<div className={styles.mid}>
			<ul className={styles.list}>
				{
					cart.map((item, index) => (
						<li className={styles.item} key={item.id}>
							<Image {...item}  index={index} />

							<div className={styles.block}>
								<Info {...item} />

								<Actions {...item} />
							</div>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Mid;
