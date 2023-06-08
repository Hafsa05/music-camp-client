import { Link } from "react-router-dom";
import logo from '../../../assets/logo/music_logo.png'

const Navbar = () => {
	// <div className="font-semibold">
		const navOptions =  <>
			<li><Link to='/' className="font-semibold">Home</Link></li>
			<li><Link to='/' className="font-semibold">Instructor</Link></li>
			<li><Link to='/blogs' className="font-semibold">Classes</Link></li>
			<li><Link to='/all-toys' className="font-semibold">Dashboard</Link></li>
			<label className="btn-circle avatar tooltip tooltip-right ml-5" data-tip=''>
				<div className="w-10 rounded-full" >
					<img src='' />
				</div>
			</label>
			{/* {
			user?.email ? <>
				<li><Link to='/my-toys'>My Toys</Link></li>
				<li><Link to='/add-toy'>Add Toy</Link></li>
				<li><button onClick={handleLogOut}>Logout</button></li>
				<label className="btn-circle avatar tooltip tooltip-right ml-5" data-tip={user.displayName}>
					<div className="w-10 rounded-full" >
						<img src={user?.photoURL} />
					</div>
				</label>
			</>
				: <li><Link to='/login'>Login</Link></li>
		} */}

		</>
	// </div>

	return (
		<>
			<div className="navbar fixed h-24 bg-sky-200 w-full">

				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{navOptions}
						</ul>
					</div>
					<div className="flex ml-20 items-center" >
						<Link to="/"><img src={logo} alt="page logo" className='rounded-full w-20' /></Link>
						<div className="ml-5">
							<h2 className='text-xl font-bold font-serif text-sky-500'><Link to='/'>Disney Dreamland Doll</Link> </h2>
							<p><small className='text-sky-500'>Enjoy the rhythm of life with music!</small> </p>
						</div>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{navOptions}
					</ul>
				</div>


			</div>
		</>

	);
};

export default Navbar;