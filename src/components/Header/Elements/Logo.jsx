import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Header/Elements/Logo.module.scss';

function Logo() {
	return (
		<Link className={styles.logo} to='/'>
			Funiro<span className={styles.dot}>.</span>
		</Link>
	)
}

export default Logo;
