import React from 'react';

import empty from 'assets/iconsfont/empty-cart.png'

import styles from 'scss/modules/Cart/Elements/Empty.module.scss';

function Empty({ setOpenCart }) {
	return (
	<div className={styles.empty}>
		<img className={styles.image} src={empty} alt='You have empty cart' />

		<button className={styles.button} type='button' onClick={() => setOpenCart(false)}>Keep browsing</button>
	</div>
	)
}

export default Empty
