import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Header/Elements/Menu.module.scss';

import Submenu from './Submenu';

function Menu() {
	const [productsIsOpen, setProductsIsOpen] = React.useState(false);
	const [roomsIsOpen, setRoomsIsOpen] = React.useState(false);
	const ref = React.useRef();

	const { windowWidth } = useSelector(state => state.windowWidth);
	const { categories, rooms } = useSelector(state => state.categories);

	return (
		<ul className={windowWidth < 767 ? styles.burger : styles.menu}>
			<li className={styles.item} ref={ref} onMouseEnter={() => setProductsIsOpen(true)} onMouseLeave={() => setProductsIsOpen(false)}>
				<Link className={styles.link} to='/categories'>Products</Link>
				<i className="fa-solid fa-chevron-down"></i>

				{
					productsIsOpen &&
					<Submenu category={categories} onMouseEnter={() => setProductsIsOpen(true)} />
				}
			</li>
			<li className={styles.item}>
				<p className={styles.link}>Rooms</p>
			</li>
			<li className={styles.item}>
				<p className={styles.link}>Inspirations</p>
			</li>
		</ul>
	)
}

export default Menu;
