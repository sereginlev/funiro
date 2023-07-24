import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Header/Elements/Submenu.module.scss';

type SubmenuProps = {
	category: string[];
	onMouseEnter: () => void;
}

const Submenu: React.FC<SubmenuProps> = ({ category }) => {
	const { windowWidth } = useAppSelector(state => state.windowWidth);

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
