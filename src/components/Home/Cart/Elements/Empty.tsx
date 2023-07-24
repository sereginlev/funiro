import React, { Dispatch, SetStateAction } from 'react';

import empty from 'assets/iconsfont/empty-cart.png'

import styles from 'scss/modules/Home/Cart/Elements/Empty.module.scss';

type EmptyProps = {
	setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const Empty: React.FC<EmptyProps> = ({ setOpenCart }) => {
	return (
	<div className={styles.empty}>
		<img className={styles.image} src={empty} alt='You have empty cart' />

		<button className={styles.button} type='button' onClick={() => setOpenCart(false)}>Keep browsing</button>
	</div>
	)
}

export default Empty
