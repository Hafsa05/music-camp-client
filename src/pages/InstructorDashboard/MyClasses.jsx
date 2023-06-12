import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';


const MyClasses = () => {
	const {user} = useContext(AuthContext);
	const { data: classes = [], refetch } = useQuery(['classes'], async () => {
		const res = await fetch(`https://music-camp-server.vercel.app/my-class?${user?.email}`)
		return res.json();
	})
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
								<th>Follow Up</th>

							</tr>
						</thead>
						<tbody>
							{
								classes.map((mclass, index) => <tr key={mclass._id} className="hover">
									<th>{index + 1}</th>
									<td>{mclass.name}</td>
									<td>{mclass.instructor}</td>
									<td>$ {mclass.courseFee}</td>
									{/* <td>{mclass.role == 'approved' ? 'approved' : <button onClick={() => handleApproveClass(mclass)} className="btn btn-ghost btn-sm text-white bg-sky-300"><FaUserEdit></FaUserEdit> </button>}</td> */}
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

export default MyClasses;