import React from 'react';

import Header from 'components/Home/Header/Header';
import Main from 'components/Product/Main';
import Trends from 'components/Product/Elements/Trends.jsx/Trends';
import Footer from 'components/Home/Footer/Footer';

function Product() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<Header />
			<Main />
			<Trends />
			<Footer />
		</>
	)
}

export default Product;
