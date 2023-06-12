import { useContext } from "react";
import { FaBook, FaBookmark, FaChalkboardTeacher, FaHistory, FaHome, FaSchool, FaUsers, FaWallet } from "react-icons/fa";
import { BsBookmarkCheckFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/providers/AuthProvider";
import logo from '../assets/logo/music_logo.png'
import PageTitle from "../Components/PageTitle/PageTitle";

const Dashboard = () => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate()

	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate('/');
			})
			.catch(error => console.log(error));
	}

	// Todo => load data from the server according to user roll
	const isAdmin = false;
	const isStudent = true;
	const isInstructor = false;

	return (
		<>
			<PageTitle pTitle={'Dashboard'}></PageTitle>
			<div className="drawer lg:drawer-open bg-sky-50">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet></Outlet>
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

				</div>
				<div className="drawer-side ">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>

					<ul className="menu p-4 w-80 h-full text-base-content bg-sky-200">
						{/* Sidebar content here */}
						<Link to='/'>
							<div className="p-8 flex">
								<div className="m-2">
									<img src={logo} alt="page logo" className='rounded-full w-20 mr-3' />
								</div>
								<div className="text-sky-500">
									<h1 className="text-2xl font-bold"> Music Camp</h1>
									<p>Enjoy the rhythm of life with music!</p>
								</div>

							</div>
						</Link>
						<div className="divider"></div>

						{
							isAdmin && <>
								<div className="p-5">
									<label className="btn-circle avatar tooltip tooltip-right ml-5 mb-5">
										<div className="w-20 rounded-full" >
											<img src={user?.photoURL} />
										</div>

									</label>
									<h2 className="font-semibold text-xl">Admin: {user?.displayName}</h2>
									<h2 className="font-semibold text-xl">Email: {user?.email}</h2>
								</div>

								<li><NavLink to='/dashboard/admin-home'><FaHome></FaHome> Admin Home</NavLink></li>
								<li><NavLink to='/dashboard/manage-classes'><FaSchool></FaSchool> Manage Classes</NavLink></li>
								<li><NavLink to='/dashboard/manage-users'><FaUsers></FaUsers> Manage Users</NavLink></li>

							</>}
						{
							isInstructor && <>
								<div className="p-5">
									<label className="btn-circle avatar tooltip tooltip-right ml-5 mb-5">
										<div className="w-20 rounded-full" >
											<img src={user?.photoURL} />
										</div>

									</label>
									<h2 className="font-semibold text-xl">Instructor: {user?.displayName}</h2>
									<h2 className="font-semibold text-xl">Email: {user?.email}</h2>
								</div>
								<li><NavLink to='/dashboard/add-classes'><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill> Add a Class</NavLink></li>
								<li><NavLink to='/dashboard/my-classes'><BsBookmarkCheckFill></BsBookmarkCheckFill> My Classes </NavLink></li>
							</>
						}

						{
							isStudent && <>
								<div className="p-5">
									<label className="btn-circle avatar tooltip tooltip-right ml-5 mb-5">
										<div className="w-20 rounded-full" >
											<img src={user?.photoURL} />
										</div>

									</label>
									<h2 className="font-semibold text-xl">Student: {user?.displayName}</h2>
									<h2 className="font-semibold text-xl">Email: {user?.email}</h2>
								</div>
								<li><NavLink to='/dashboard/selected-classes'><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill> Selected Classes</NavLink></li>
								<li><NavLink to='/dashboard/enrolled-classes'><BsBookmarkCheckFill></BsBookmarkCheckFill> Enrolled Classes </NavLink></li>
								<li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment</NavLink></li>
								<li><NavLink to='/dashboard/payment-history'><FaHistory></FaHistory> Payment History</NavLink></li>
							</>
						}




						<div className="divider"></div>
						<li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
						<li><NavLink to="/classes"><FaSchool></FaSchool> Classes</NavLink></li>
						<li><NavLink to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
						<li><button onClick={handleLogOut}><FiLogOut></FiLogOut> Logout</button></li>
					</ul>
				</div>
			</div >
		</>

	);
};

export default Dashboard;