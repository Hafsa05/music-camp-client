
// Todo: make use to show only 6 popular classes here 
const ClassCard = ({ pClass }) => {
	const { _id, name, image, instructor, courseFee } = pClass;
	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-2 pt-2">
					<img src={image} alt="classes image" className="rounded-xl" />
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold text-xl text-purple-600">{name}</h2>
					<h2 className="card-title ">Instructor: {instructor}</h2>
					<div className="card-actions place-items-end">

					</div>
				</div>
			</div>

		</div>
	);
};

export default ClassCard;