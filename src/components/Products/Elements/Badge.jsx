import React from 'react';

import styles from 'scss/modules/Products/Elements/Badge.module.scss';

function Badge({ sale, isNew }) {
	
	return (
		<>
			{
				sale ?
					<span className={[styles.badge, styles.red].join(' ')}>-{sale}%</span>
					: isNew ?
						<span className={[styles.badge, styles.green].join(' ')}>New</span>
						:
						null
			}
		</>
	)
}

export default Badge;
