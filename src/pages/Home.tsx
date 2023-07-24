import React from 'react';

import Header from 'components/Home/Header/Header';
import Hero from 'components/Home/Hero/Hero';
import Features from 'components/Home/Features/Features';
import Products from 'components/Home/Products/Products';
import Tips from 'components/Home/Tips/Tips';
import Footer from 'components/Home/Footer/Footer';
import Gallery from 'components/Home/Gallery/Gallery';

const Home: React.FC = () => {
  return (
	 <>
	 	<Header color='#f9f1e7'/>
		<Hero />
		<Features />
		<Products />
		<Tips />
		<Gallery />
		<Footer />
	 </>
  )
}

export default Home;
