import React from 'react';

import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Features from 'components/Features/Features';
import Products from 'components/Products/Products';

function Home() {
  return (
	 <>
	 	<Header />
		<Hero />
		<Features />
		<Products />
	 </>
  )
}

export default Home;
