import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { FaTrashAlt, FaUserCheck, FaUserCircle, FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await fetch('http://localhost:5000/users')
		return res.json()
	})

	const handleStudent = use=>{

	}
	const handleAdmin = user => {
		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: 'PATCH'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.modifiedCount) {
					refetch()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Now you are an Admin!',
						showConfirmButton: false,
						timer: 1500
					})

				}
			})
	}

	const handleInstructor = user => {
		fetch(`http://localhost:5000/users/instructor/${user._id}`, {
			method: 'PATCH'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.modifiedCount) {
					refetch()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Now you are an Instructor!',
						showConfirmButton: false,
						timer: 1500
					})

				}
			})
	}

	const handleDelete = user => {
		Swal.fire({
			title: 'Do you want to remove this user?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/users/${user._id}`, {
					method: 'DELETE'
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								'Deleted!',
								'User removed!',
								'success'
							)
						}
					})
			}
		})
	}

	return (
		<>
			<PageTitle pTitle={"Dashboard - Manage Users"}></PageTitle>
			<p>Total reg. user: {users.length}</p>
			<div className="overflow-x-auto w-full">
				<table className="table font-semibold ">
					<thead className="font-bold text-xl">
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Assigned Roll</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((user, index) => <tr key={user._id} className="hover">
								<th>{index + 1}</th>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>
									{user.role == 'Student' ? 'Student' : <button onClick={() => handleStudent(user)} className="btn btn-sm bg-sky-300 text-white mr-5"><FaUserCircle></FaUserCircle> Student</button>}
									{user.role == 'Instructor' ? 'Instructor' : <button onClick={() => handleInstructor(user)} className="btn btn-sm bg-sky-300 text-white ml-5 mr-10"><FaUserEdit></FaUserEdit> Instructor</button>}
									{user.role == 'Admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className="btn btn-sm bg-sky-300 text-white ml-5 mr-10"><FaUserCheck></FaUserCheck> Admin</button>}
								</td>
								<td><button onClick={() => handleDelete(user)} className="btn text-white bg-red-600"><FaTrashAlt></FaTrashAlt> Delete</button></td>
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