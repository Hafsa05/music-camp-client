import { Helmet } from "react-helmet";
import useInstructor from "../../hooks/useInstructor/useInstructor";
import CommonButton from "../../Components/CommonButton/CommonButton";

const AllInstructors = () => {
	const [instructors] = useInstructor();
	return (
		<div className="w-full">
			<Helmet>
				<title>Music Camp | Our Instructors</title>
			</Helmet>
			<h3 className="text-3xl font-semibold my-4"> Total instructors: {instructors.length}</h3>
			<div className="overflow-x-auto">
				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th>Serial</th>
								<th>Name</th>
								<th>Email</th>
								<th>Total Classes</th>
								<th>See Classes</th>
							</tr>
						</thead>
						<tbody>
							{instructors.map((instructor, index) => <tr key={instructors._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
											</div>
										</div>
										<div>
											<div className="font-bold">{instructor.name}</div>
										</div>
									</div>
								</td>
								<td>{instructor.email}</td>
								<td>{instructor.classesTaken}</td>
								<th><CommonButton text={"classes"}></CommonButton></th>
							</tr>)}



						</tbody>


					</table>
				</div>
			</div>
		</div>
	);
};

export default AllInstructors;