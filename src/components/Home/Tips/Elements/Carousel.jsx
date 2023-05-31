import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import styles from 'scss/modules/Home/Tips/Elements/Carousel.module.scss';

import img1 from 'assets/tips/01.jpg';
import img2 from 'assets/tips/02.jpg';
import img3 from 'assets/tips/03.jpg';
import img4 from 'assets/tips/04.jpg';
import img5 from 'assets/tips/05.jpg';
import img6 from 'assets/tips/06.jpg';
import img7 from 'assets/tips/07.jpg';
import img8 from 'assets/tips/08.jpg';
import img9 from 'assets/tips/09.jpg';

import Arrows from './Arrows';

function Carousel() {
	const [items, setItems] = React.useState([
		{ id: 1, title: 'How to create a living room to love', img: img1, date: '20 january 2020' },
		{ id: 2, title: 'Solution for clean look working space', img: img2, date: '18 june 2021' },
		{ id: 3, title: '7 shoe storage ideas for a tidy hallway', img: img3, date: '05 april 2021' },
		{ id: 4, title: 'Storage for life on the go', img: img4, date: '16 may 2022' },
		{ id: 5, title: 'How to choose the right vase for your flowers', img: img5, date: '03 january 2021' },
		{ id: 6, title: 'The Swedish rustic wedding trend', img: img6, date: '28 september 2022' },
		{ id: 7, title: 'Basic but beautiful table setting ideas', img: img7, date: '19 march 2021' },
		{ id: 8, title: 'Maximising kitchen space for more room to cook', img: img8, date: '22 december 2020' },
		{ id: 9, title: 'Working comfortably in the living room', img: img9, date: '14 october 2021' },
	]);
	const [startIndex, setStartIndex] = React.useState(0);
	const [endIndex, setEndIndex] = React.useState(2);

	return (
		<div className={styles.carousel}>
			<Arrows startIndex={startIndex} endIndex={endIndex} setStartIndex={setStartIndex} setEndIndex={setEndIndex} items={items} />

			<ul className={styles.list}>
				{
					items.map((item, index) => (
						index >= startIndex && index <= endIndex &&
						<Link className={styles.item} to='/' key={item.id}>
							<img className={styles.img} src={item.img} alt={item.title} />
							<div className={styles.info}>
								<h3 className={styles.title}>{item.title}</h3>
								<p className={styles.date}>{item.date.toUpperCase()}</p>
							</div>
						</Link>
					))
				}
			</ul>
		</div>

	)
}

export default Carousel
