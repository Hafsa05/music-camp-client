import {
	createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../LayOut/Dashboard";
import AdminHome from "../pages/AdminDashboard/AdminHome";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import ManageClasses from "../pages/AdminDashboard/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../pages/StudentDashboard/SelectedClasses";
import EnrolledClasses from "../pages/StudentDashboard/EnrolledClasses";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: 'login',
				element: <Login></Login>
			},
			{
				path: 'signup',
				element: <SignUp></SignUp>
			},
			{
				path: 'classes',
				element: <AllClasses></AllClasses>
			},
			{
				path: 'instructors',
				element: <AllInstructors></AllInstructors>
			}
		]
	},
	{
		path: 'dashboard',
		element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
		children: [
			{
				path: 'admin-home',
				element: <AdminHome></AdminHome>
			},
			{
				path: 'manage-users',
				element: <ManageUsers></ManageUsers>
			},
			{
				path: 'manage-classes',
				element: <ManageClasses></ManageClasses>
			},
			{
				path: 'selected-classes',
				element: <SelectedClasses></SelectedClasses>
			},
			{
				path: 'enrolled-classes',
				element: <EnrolledClasses></EnrolledClasses>
			}
		]
	}
]);