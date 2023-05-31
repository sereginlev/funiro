import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Header/Elements/Submenu.module.scss';

function Submenu({ category }) {
	const { windowWidth } = useSelector(state => state.windowWidth);

	const { categories } = useSelector(state => state.categories);

	return (
		<ul className={windowWidth < 767 ? styles.burger : styles.submenu}>
			{
				category.map((category, index) => (
					<li className={styles.item} key={index}>
						<Link className={styles.link} to={`/categories/${category}`}>
							{category}
						</Link>
					</li>
				))
			}
		</ul>
	)
}

export default Submenu;
