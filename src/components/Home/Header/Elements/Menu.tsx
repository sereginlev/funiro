import React from 'react';
import { useAppSelector } from 'hook';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Header/Elements/Menu.module.scss';

import Submenu from './Submenu';

const Menu: React.FC = () => {
	const [productsIsOpen, setProductsIsOpen] = React.useState<boolean>(false);
	const [roomsIsOpen, setRoomsIsOpen] = React.useState<boolean>(false);
	const ref = React.useRef<HTMLLIElement>(null);

	const { windowWidth } = useAppSelector(state => state.windowWidth);
	const { categories } = useAppSelector(state => state.categories);

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
				<a className={styles.link} href='#gallery'>Inspirations</a>
			</li>
		</ul>
	)
}

export default Menu;
