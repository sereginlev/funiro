import React from 'react';

import Header from 'components/Home/Header/Header';
import Main from 'components/Product/Main';
import Trends from 'components/Product/Elements/Trends/Trends';
import Footer from 'components/Home/Footer/Footer';

const Product: React.FC = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<Header color='#f9f1e7' />
			<Main />
			<Trends />
			<Footer />
		</>
	)
}

export default Product;
