import React from 'react';

import styles from 'scss/modules/Product/Elements/Info/Configure.module.scss';

function Configure({ ...product }) {
  return (
	 <ul className={styles.configure}>
		 <li className={styles.item}>
			 <h5 className={styles.title}>Texture:</h5>
			 <span className={styles.text}>{product.texture}</span>
		 </li>

		 <li className={styles.item}>
			 <h5 className={styles.title}>Weight:</h5>
			 <span className={styles.text}>{product.weight}</span>
		 </li>

		 <li className={styles.item}>
			 <h5 className={styles.title}>Size:</h5>
			 <span className={styles.text}>{product.size}</span>
		 </li>
	 </ul>
  )
}

export default Configure;
