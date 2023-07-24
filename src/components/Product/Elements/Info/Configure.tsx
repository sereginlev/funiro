import React from 'react';

import styles from 'scss/modules/Product/Elements/Info/Configure.module.scss';

type ConfigureProps = {
	id: number;
	category: string;
	description: string;
	price: number;
	specs: string;
	texture: string;
	weight: string;
	size: string;
	count?: number;
	sale?: number;
	isNew?: boolean;
}

const Configure: React.FC<ConfigureProps> = ({ ...product }) => {
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
