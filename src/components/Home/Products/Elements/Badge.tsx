import React from 'react';

import styles from 'scss/modules/Home/Products/Elements/Badge.module.scss';

type BadgeProps = {
	sale?: number;
	isNew?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ sale, isNew }) => {
	
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
