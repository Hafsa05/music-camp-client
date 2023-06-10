import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCourseCart from "../../hooks/useCourseCart/useCourseCart";

const AllClassesCart = ({ pClass }) => {
	const { _id, name, image, instructor, availableSeat, totalSeat, courseFee } = pClass;

	const { user } = useContext(AuthContext);

	const [, refetch] = useCourseCart();

	const navigate = useNavigate();
	const location = useLocation();

	const handleAddSeat = (pClass) => {
		console.log(pClass);
		if (user && user.email) {
			const courseSeat = { courseId: _id, name, instructor, image, courseFee, email: user.email };
			fetch('http://localhost:5000/course-cart', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(courseSeat),
			})
				.then(res => res.json())
				.then(data => {
					// console.log('before if', data);
					if (data.insertedId) {
						// console.log('after if', data);
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Seat added to your ID',
							showConfirmButton: false,
							timer: 1500
						})
					}
				})
		}
		else {
			Swal.fire({
				title: 'Please login to book a seat',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login now!'
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/login', { state: { from: location } })
				}
			})
		}
	}

	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-2 pt-2">
					<img src={image} alt="classes image" className="rounded-xl" />
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold text-xl text-purple-600">{name}</h2>
					<h2 className="card-title">Instructor: {instructor}</h2>
					<h2 className="card-title">Total Seats: {totalSeat}</h2>
					<h2 className="card-title">Available Seats: {availableSeat}</h2>
					<p className="card-title">Price: ${courseFee}</p>
					<div className="card-actions">
						<button onClick={() => handleAddSeat(pClass)} className="btn btn-outline btn-info border-b-4 border-r-4">Add to Cart</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default AllClassesCart;