import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'scss/modules/Home/Hero/Elements/Description.module.scss';

function Description() {
  return (
	 <article className={styles.description}>
		<h1 className={styles.title}>High-Quality Furniture Just For You</h1>
		<p className={styles.text}>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
		
		<Link className={styles.button} to='/categories'>Shop now</Link>
	 </article>
  )
}

export default Description;
