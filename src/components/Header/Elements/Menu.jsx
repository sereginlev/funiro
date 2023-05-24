import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Header/Elements/Menu.module.scss';

import Submenu from './Submenu';

function Menu() {
	const [productsIsOpen, setProductsIsOpen] = React.useState(false);
	const [roomsIsOpen, setRoomsIsOpen] = React.useState(false);
	const ref = React.useRef();

	const { windowWidth } = useSelector(state => state.windowWidth);

	return (
		<ul className={windowWidth < 767 ? styles.burger : styles.menu}>
			<li className={styles.item} ref={ref} onMouseEnter={() => setProductsIsOpen(true)} onMouseLeave={() => setProductsIsOpen(false)}>
				<p className={styles.link}>Products</p>
				<i className="fa-solid fa-chevron-down"></i>

				{
					productsIsOpen &&
					<Submenu onMouseEnter={() => setProductsIsOpen(true)} />
				}
			</li>
			<li className={styles.item} ref={ref} onMouseEnter={() => setRoomsIsOpen(true)} onMouseLeave={() => setRoomsIsOpen(false)}>
				<p className={styles.link}>Rooms</p>
				<i className="fa-solid fa-chevron-down"></i>

				{
					roomsIsOpen &&
					<Submenu onMouseEnter={() => setProductsIsOpen(true)} />
				}
			</li>
			<li className={styles.item}>
				<p className={styles.link}>Inspirations</p>
			</li>
		</ul>
	)
}

export default Menu;
