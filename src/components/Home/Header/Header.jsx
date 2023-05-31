import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Header/Header.module.scss';
import Burger from './Elements/Burger';

import Logo from './Elements/Logo';
import Menu from './Elements/Menu';
import User from './Elements/User';

function Header({ color }) {
	const { windowWidth } = useSelector(state => state.windowWidth);

	return (
		<header className={styles.header} style={{ backgroundColor: color }}>
			<div className='container'>
				<nav className={styles.nav}>
					<Logo />

					{
						windowWidth < 767 ?
							<Burger />
							:
							<>
								<Menu />

								<User />
							</>
					}

				</nav>
			</div>
		</header>
	)
}

export default Header;
