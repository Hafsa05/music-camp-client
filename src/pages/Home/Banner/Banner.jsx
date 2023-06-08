import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/banner/photo1.avif'
import image2 from '../../../assets/banner/photo2.jpg'
import image3 from '../../../assets/banner/photo3.jpg'
import image4 from '../../../assets/banner/photo4.jpg'
import image5 from '../../../assets/banner/photo5.webp'

const Banner = () => {
	return (
		<div>
			<Carousel className='text-center'>
				<div>
					<img src={image1} />
					<p className="legend">Piano Class</p>
				</div>
				<div>
					<img src={image2} />
					<p className="legend">Violin Class</p>
				</div>
				<div>
					<img src={image3} />
					<p className="legend">Flute Class </p>
				</div>
				<div>
					<img src={image4} />
					<p className="legend">Guitar Class</p>
				</div>
				<div>
					<img src={image5} />
					<p className="legend">Drumps Class</p>
				</div>
				{/* <div>
					<img src={image5} />
					<p className="legend">Drumps Class</p>
				</div>
				<div>
					<img src={image5} />
					<p className="legend">Drumps Class</p>
				</div> */}

			</Carousel>
		</div>
	);
};

export default Banner;