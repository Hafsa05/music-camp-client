import PageTitle from "../../Components/PageTitle/PageTitle";
import useCourseCart from "../../hooks/useCourseCart/useCourseCart";
import CommonButton from "../../Components/CommonButton/CommonButton";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {

	const [courseCart, refetch] = useCourseCart();
	console.log(courseCart);
	const totalFee = courseCart.reduce((total, course) => parseInt(course.courseFee) + total, 0);

	const handleDelete = course => {
		Swal.fire({
			title: 'Do you want to remove this course?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/course-cart/${course._id}`, {
					method: 'DELETE'
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								'Deleted!',
								'Your course has been removed.',
								'success'
							)
						}
					})
			}
		})
	}
	return (
		<>
			<PageTitle pTitle={"Selected Classes"}></PageTitle>
			<h2 className=" font-semibold text-xl">My total no of selected course: {courseCart?.length}</h2>
			<div className="overflow-x-auto w-full">
				<table className="table font-semibold">
					<thead className="font-bold text-xl">
						<tr >
							<th></th>
							<th>Image</th>
							<th>Course Name</th>
							<th>Instructor</th>
							<th>Course Fee</th>
							<th>Action</th>

						</tr>
					</thead>
					<tbody>
						{courseCart.map((course, index) => <tr key={course._id} className="hover">
							<th> {index + 1} </th>
							<td>
								<div className="flex items-center space-x-3">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={course.image} alt="Avatar Tailwind CSS Component" />
										</div>
									</div>

								</div>
							</td>
							<td> {course.name} </td>
							<td> {course?.instructor}</td>
							<td> $ {course?.courseFee}</td>
							<th>
								<button className="bg-red-400 btn btn-sm btn-outline" onClick={() => handleDelete(course)}>Delete</button>
							</th>
						</tr>)}
					</tbody>
				</table>
			</div>

			<h2 className=" font-semibold text-xl">Total price: $ {totalFee}</h2> <br />
			<Link to='/dashboard/payment'>
				<CommonButton text={"payment"}></CommonButton>
			</Link>



		</>

	);
};

export default SelectedClasses;