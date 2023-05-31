import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from 'scss/modules/Product/Main.module.scss';

import Gallery from './Elements/Gallery';
import Info from './Elements/Info/Info';
import Configure from './Elements/Info/Configure';

function Main() {
	const { id } = useParams();

	const { products } = useSelector(state => state.products);
	const { cart } = useSelector(state => state.cart);

	return (
		<>
			{
				products.map((product, index) => (
					product.id === Number(id) &&
					<section className={styles.main} key={product.id}>
						<div className='container'>
							<div className={styles.product}>
								<Gallery {...product} />

								{
									cart.find(el => el.id === product.id) ?
										cart.map(cart => (
											cart.id === product.id &&
											<Info {...cart} key={index}/>
										))
										:
										<>
											<Info {...product} />
										</>
								}

							</div>
							
							<Configure {...product} />
						</div>
					</section>
				))
			}
		</>
	)
}

export default Main;