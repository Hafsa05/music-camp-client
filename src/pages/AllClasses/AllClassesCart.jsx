import CommonButton from "../../Components/CommonButton/CommonButton";

const AllClassesCart = ({ pClass }) => {
	const { _id, name, image, instructor, availableSeat, totalSeat, courseFee } = pClass;
	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-2 pt-2">
					<img src={image} alt="classes image" className="rounded-xl" />
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold text-xl">{name}</h2>
					<h2 className="card-title ">Instructor: {instructor}</h2>
					<h2 className="card-title ">Total Seats: {totalSeat}</h2>
					<h2 className="card-title ">Available Seats: {availableSeat}</h2>
					<p className="card-title">Price: ${courseFee}</p>
					<div className="card-actions">
						{/* <Link to={`/class/${_id}`}> */}
							<CommonButton text={'book a seat'}></CommonButton>
						{/* </Link> */}
					</div>
				</div>
			</div>

		</div>
	);
};

export default AllClassesCart;