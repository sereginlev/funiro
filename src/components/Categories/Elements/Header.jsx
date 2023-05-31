import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Categories/Elements/Header.module.scss';

function Header() {
	const { categories } = useSelector(state => state.categories);

	return (
		<div className={styles.header}>
			<h2 className={styles.title}>Categories</h2>

			<ul className={styles.list}>
				{
					categories.map((category, index) => (
						<Link className={styles.link} to={`/categories/${category}`} key={index}>
							<li className={styles.item}>
								{category.toUpperCase()}
							</li>
						</Link>
					))
				}
			</ul>
		</div>
	)
}

export default Header;
