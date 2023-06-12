import React from 'react';

import styles from 'scss/modules/Home/Tips/Elements/Arrows.module.scss';

function Arrows({ startIndex, endIndex, setStartIndex, setEndIndex, items }) {
	console.log(endIndex)
	const goToNext = () => {
		if (endIndex === items.length - 1) {
			return
		}

		setStartIndex(startIndex + 3);
		setEndIndex(endIndex + 3);
	}

	const goToPrevious = () => {
		if (startIndex === 0) {
			return
		}

		setStartIndex(startIndex - 3);
		setEndIndex(endIndex - 3);
	}

	return (
		<div className={styles.arrows}>
			<button className={[styles.arrow, styles.prev].join(' ')} type='button' onClick={goToPrevious}>
				<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13.4697 0.863701C13.8212 1.21517 13.8212 1.78502 13.4697 2.13649L7.63642 7.96983C7.46763 8.13861 7.23871 8.23343 7.00002 8.23343C6.76132 8.23343 6.53241 8.13861 6.36362 7.96983L0.530291 2.13649C0.178819 1.78502 0.178819 1.21517 0.530291 0.863701C0.881763 0.51223 1.45161 0.51223 1.80308 0.863702L7.00002 6.06064L12.197 0.863702C12.5484 0.51223 13.1183 0.51223 13.4697 0.863701Z" fill="#3A3A3A" />
				</svg>
			</button>

			<button className={[styles.arrow, styles.next].join(' ')} type='button' onClick={goToNext}>
				<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13.4697 0.863701C13.8212 1.21517 13.8212 1.78502 13.4697 2.13649L7.63642 7.96983C7.46763 8.13861 7.23871 8.23343 7.00002 8.23343C6.76132 8.23343 6.53241 8.13861 6.36362 7.96983L0.530291 2.13649C0.178819 1.78502 0.178819 1.21517 0.530291 0.863701C0.881763 0.51223 1.45161 0.51223 1.80308 0.863702L7.00002 6.06064L12.197 0.863702C12.5484 0.51223 13.1183 0.51223 13.4697 0.863701Z" fill="#3A3A3A" />
				</svg>
			</button>
		</div>
	)
}

export default Arrows;