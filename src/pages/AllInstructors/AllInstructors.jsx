import useInstructor from "../../hooks/useInstructor/useInstructor";
import CommonButton from "../../Components/CommonButton/CommonButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useIsInstructor from "../../hooks/useIsInstructor/useIsInstructor";
import { useContext } from "react";

const AllInstructors = () => {
	const [instructors] = useInstructor();


	return (
		<div className="w-full">
			<PageTitle pTitle={'Our Instructors'}></PageTitle>
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
							{instructors.map((instructor, index) => <tr key={instructor._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
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