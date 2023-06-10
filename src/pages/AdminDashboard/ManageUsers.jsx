import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Components/PageTitle/PageTitle";

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await fetch('http://localhost:5000/users')
		return res.json()
	})
	return (
		<>
			<PageTitle pTitle={"Dashboard - Manage Users"}></PageTitle>
			<p>Total reg. user: {users.length}</p>
			<div className="overflow-x-auto w-full">
				<table className="table ">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Roll</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((user, index) => <tr key={user._id} className="hover">
								<th>{index + 1}</th>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>Blue</td>
							</tr>
							)
						}

					</tbody>
				</table>
			</div>
		</>
	);
};

export default ManageUsers;