import { createSlice } from '@reduxjs/toolkit';

import img1 from 'assets/products/1. little arm chair sheepskin/1.jpg';
import img2 from 'assets/products/1. little arm chair sheepskin/2.jpg';
import img3 from 'assets/products/1. little arm chair sheepskin/3.jpg';

import img4 from 'assets/products/2. pop up toaster/1.jpg';
import img5 from 'assets/products/2. pop up toaster/2.jpg';
import img6 from 'assets/products/2. pop up toaster/3.jpg';

import img7 from 'assets/products/3. lamp light blue/1.jpg';
import img8 from 'assets/products/3. lamp light blue/2.jpg';
import img9 from 'assets/products/3. lamp light blue/3.jpg';

import img10 from 'assets/products/4. golden modern lights/1.jpg';
import img11 from 'assets/products/4. golden modern lights/2.jpg';
import img12 from 'assets/products/4. golden modern lights/3.jpg';

import img13 from 'assets/products/5. body oil 200ml/1.jpg';
import img14 from 'assets/products/5. body oil 200ml/2.jpg';
import img15 from 'assets/products/5. body oil 200ml/3.jpg';

import img16 from 'assets/products/6. black and white/1.jpg';
import img17 from 'assets/products/6. black and white/2.jpg';
import img18 from 'assets/products/6. black and white/3.jpg';

import img19 from 'assets/products/7. cube lolo/1.png';
import img20 from 'assets/products/7. cube lolo/2.jpg';
import img21 from 'assets/products/7. cube lolo/3.jpg';

import img22 from 'assets/products/8. traditional armchair/1.jpg';
import img23 from 'assets/products/8. traditional armchair/2.jpg';
import img24 from 'assets/products/8. traditional armchair/3.jpg';

import img25 from 'assets/products/9. the sun pendant black/1.jpg';
import img26 from 'assets/products/9. the sun pendant black/2.jpg';
import img27 from 'assets/products/9. the sun pendant black/3.jpg';

import img28 from 'assets/products/10. simple golden lamp/1.png';
import img29 from 'assets/products/10. simple golden lamp/2.jpg';
import img30 from 'assets/products/10. simple golden lamp/3.jpg';

import img31 from 'assets/products/11. unbleached cotton pads/1.jpg';
import img32 from 'assets/products/11. unbleached cotton pads/2.jpg';
import img33 from 'assets/products/11. unbleached cotton pads/3.jpg';

import img34 from 'assets/products/12. oak spanish chair/1.png';
import img35 from 'assets/products/12. oak spanish chair/2.jpg';
import img36 from 'assets/products/12. oak spanish chair/3.jpg';

import img37 from 'assets/products/13. copenhagen armchair/1.jpg';
import img38 from 'assets/products/13. copenhagen armchair/2.jpg';
import img39 from 'assets/products/13. copenhagen armchair/3.jpg';

import img40 from 'assets/products/14. anti dark light/1.jpg';
import img41 from 'assets/products/14. anti dark light/2.jpg';
import img42 from 'assets/products/14. anti dark light/3.jpg';

import img43 from 'assets/products/15. table lamp/1.png';
import img44 from 'assets/products/15. table lamp/2.jpg';
import img45 from 'assets/products/15. table lamp/3.jpg';

import img46 from 'assets/products/16. mat black lamp/1.png';
import img47 from 'assets/products/16. mat black lamp/2.jpg';
import img48 from 'assets/products/16. mat black lamp/3.jpg';

import img49 from 'assets/products/17. comfy chair/1.jpg';
import img50 from 'assets/products/17. comfy chair/2.jpg';
import img51 from 'assets/products/17. comfy chair/3.jpg';

import img52 from 'assets/products/18. body oil 50ml/1.jpg';
import img53 from 'assets/products/18. body oil 50ml/2.jpg';
import img54 from 'assets/products/18. body oil 50ml/3.jpg';

const initialState = {
	images: [
		[img1, img2, img3], [img4, img5, img6], [img7, img8, img9], [img10, img11, img12], [img13, img14, img15],
		[img16, img17, img18], [img19, img20, img21], [img22, img23, img24], [img25, img26, img27], [img28, img29, img30], 
		[img31, img32, img33], [img34, img35, img36], [img37, img38, img39], [img40, img41, img42], [img43, img44, img45], 
		[img46, img47, img48], [img49, img50, img51], [img52, img53, img54]
	]
}

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
	}
});

export const { } = imagesSlice.actions;

export default imagesSlice.reducer;