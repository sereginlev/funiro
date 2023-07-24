import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Header/Elements/Logo.module.scss';

const Logo: React.FC = () => {
	return (
		<Link className={styles.logo} to='/' onClick={() => window.scrollTo(0, 0)}>
			Funiro<span className={styles.dot}>.</span>
		</Link>
	)
}

export default Logo;
