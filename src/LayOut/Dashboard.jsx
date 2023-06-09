import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaChalkboardTeacher, FaHome, FaSchool, FaUsers, FaUser} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../pages/providers/AuthProvider";

const Dashboard = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.log(error));
	}

	// todo => load data from the server to have dynamic isAdmin based on Data
	const isAdmin = true;
	return (
		<>
			<Helmet>
				<title>Music Camp | Dashboard</title>
			</Helmet>
			<div className="drawer lg:drawer-open bg-sky-100">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet></Outlet>
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

				</div>
				<div className="drawer-side ">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>

					<ul className="menu p-4 w-80 h-full text-base-content bg-sky-200">
						{/* Sidebar content here */}
						<div className="p-8 ">
							<h1 className="text-2xl font-bold"> Music Camp</h1>
							<p>Enjoy the rhythm of life with music!</p>
						</div>
						<div className="divider"></div>

						<div className="p-5">
							<label className="btn-circle avatar tooltip tooltip-right ml-5 mb-5">
								<div className="w-20 rounded-full" >
									<img src={user?.photoURL} />
								</div>
								
							</label>
							<h2 className="font-semibold text-xl">Admin: {user.displayName}</h2>
							<h2 className="font-semibold text-xl">Email: {user.email}</h2>
						</div>

						<li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
						<li><NavLink to='/dashboard/manageclasses'><FaSchool></FaSchool> Manage Classes</NavLink></li>
						<li><NavLink to='/dashboard/manageusers'><FaUsers></FaUsers> Manage Users</NavLink></li>

						<div className="divider"></div>
						<li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
						<li><NavLink to="/classes"><FaSchool></FaSchool> Classes</NavLink></li>
						<li><NavLink to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
						<li><button onClick={handleLogOut}><FiLogOut></FiLogOut> Logout</button></li>
					</ul>
				</div>
			</div>
		</>

	);
};

export default Dashboard;