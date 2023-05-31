import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Footer/Footer.module.scss';

import Logo from '../Header/Elements/Logo';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.block}>
					<div className={styles.info}>
						<Logo />
						<p className={styles.text}>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website.</p>
					</div>

					<ul className={styles.list}>
						<li className={styles.item}>
							<Link className={styles.link} to='/categories' onClick={() => window.scrollTo(0, 0)}>Products</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} to='/'>Rooms</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} to='/'>Inspirations</Link>
						</li>
					</ul>

					<div className={styles.updated}>
						<h3 className={styles.title}>Stay updated</h3>

						<form className={styles.form}>
							<input className={styles.input} type='email' placeholder='Enter your email' />
							<button className={styles.button} type='button'>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.7825 0.217449C17.6813 0.116704 17.5534 0.046952 17.4139 0.0163941C17.2744 -0.0141638 17.1291 -0.00425714 16.995 0.0449493L0.495001 6.04495C0.352702 6.09892 0.230191 6.19491 0.143739 6.32016C0.0572872 6.44542 0.0109863 6.59401 0.0109863 6.7462C0.0109863 6.89839 0.0572872 7.04698 0.143739 7.17223C0.230191 7.29749 0.352702 7.39348 0.495001 7.44745L6.9375 10.0199L11.6925 5.24995L12.75 6.30745L7.9725 11.0849L10.5525 17.5275C10.6081 17.667 10.7043 17.7866 10.8286 17.8709C10.953 17.9551 11.0998 18.0001 11.25 17.9999C11.4016 17.9968 11.5486 17.9479 11.6718 17.8595C11.795 17.7711 11.8885 17.6475 11.94 17.5049L17.94 1.00495C17.9911 0.872257 18.0034 0.727772 17.9755 0.588342C17.9477 0.448912 17.8807 0.320282 17.7825 0.217449Z" fill="white" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
