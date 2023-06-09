import { Link } from "react-router-dom";

const ClassesCard = ({ pClass }) => {
	const { _id, name, image, courseFee } = pClass;
	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-2 pt-2">
					<img src={image} alt="classes image" className="rounded-xl" />
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold text-xl">{name}</h2>
					<p className="card-title">Price: ${courseFee}</p>
					<div className="card-actions place-items-end">
						{/* <Link to={`/class/${_id}`}>
							<button className="btn btn-primary">Book Now</button>
						</Link> */}
					</div>
				</div>
			</div>

		</div>
	);
};

export default ClassesCard;