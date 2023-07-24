import React from 'react';

import styles from 'scss/modules/Home/Header/Elements/Burger.module.scss';

import Menu from './Menu';
import User from './User';

const Burger: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	return (
		<>
			<i className="fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)}></i>

			<div className={isOpen ? styles.visibleBurger : [styles.visibleBurger, styles.hiddenBurger].join(' ')}>
				<div className={styles.top}>
					<User />

					<svg className={styles.closeIcon} onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
				</div>

				<Menu />
			</div>
		</>
	)
}

export default Burger;
