import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Header/Elements/Submenu.module.scss';

function Submenu({ text }) {
	const { windowWidth } = useSelector(state => state.windowWidth);

	return (
		<ul className={windowWidth < 767 ? styles.burger : styles.submenu}>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					Furnitures
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					Electronics
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					Lamps
				</Link>
			</li>
			<li className={styles.item}>
				<Link className={styles.link} to='/'>
					Chairs
				</Link>
			</li>
		</ul>
	)
}

export default Submenu;
