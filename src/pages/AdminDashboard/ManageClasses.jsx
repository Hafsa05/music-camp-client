import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
	
	const { data: classes = [], refetch } = useQuery(['classes'], async () => {
		const res = await fetch('https://music-camp-server.vercel.app/classes')
		return res.json();
	})

	const handleApproveClass = mclass => {
		fetch(`https://music-camp-server.vercel.app/classes/music-class/${mclass._id}`, {
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
						title: 'Class Approved',
						showConfirmButton: false,
						timer: 1500
					})

				}
			})
	}

	return (
		<>
			<div className='w-full'>
				<div className="overflow-x-auto w-full">
					<table className="table font-semibold hover">
						<thead className="font-bold text-xl">
							<tr>
								<th></th>
								<th>Class Name</th>
								<th>Instructor Name</th>
								<th>Price</th>
								<th>Status</th>

							</tr>
						</thead>
						<tbody>
							{
								classes.map((mclass, index) => <tr key={mclass._id} className="hover">
									<th>{index + 1}</th>
									<td>{mclass.name}</td>
									<td>{mclass.instructor}</td>
									<td>$ {mclass.courseFee}</td>
									<td>{mclass.role == 'approved' ? 'approved' : <button onClick={() => handleApproveClass(mclass)} className="btn btn-ghost btn-sm text-white bg-sky-300"><FaUserEdit></FaUserEdit> </button>}</td>
									{/* <td>{mclass.role == 'approved' ? 'approved' : <button onClick={() => handleD(mclass)} className="btn btn-ghost btn-sm text-white bg-sky-300"><FaUserEdit></FaUserEdit> </button>}</td> */}


								</tr>)
							}

						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ManageClasses;