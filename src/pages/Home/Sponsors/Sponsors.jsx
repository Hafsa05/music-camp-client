import SectionHeadings from '../../../Components/SectionHeadings/SectionHeadings';
import img1 from '../../../assets/sponsor/nagad.png'
import img2 from '../../../assets/sponsor/GP.png'
import img3 from '../../../assets/sponsor/bk.png'
import img4 from '../../../assets/sponsor/bkash.png'

const Sponsors = () => {
	return (
		<>
			<SectionHeadings heading={"Our Sponsors"} subHeading={""}></SectionHeadings>
			<div className='flex gap-5 m-5'>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<img src={img1} className='w-25 h-25' alt="Sponsor" />
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<img src={img2} className='w-25 h-25' alt="Sponsor" />
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<img src={img3} className='w-25 h-25' alt="Sponsor" />
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<img src={img4} className='w-25 h-25' alt="Sponsor" />
				</div>

			</div>
		</>

	);
};

export default Sponsors;