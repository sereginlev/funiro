import React from 'react';

import Header from 'components/Home/Header/Header';
import Hero from 'components/Home/Hero/Hero';
import Features from 'components/Home/Features/Features';
import Products from 'components/Home/Products/Products';
import Tips from 'components/Home/Tips/Tips';
import Footer from 'components/Home/Footer/Footer';

function Home() {
  return (
	 <>
	 	<Header />
		<Hero />
		<Features />
		<Products />
		<Tips />
		<Footer />
	 </>
  )
}

export default Home;
