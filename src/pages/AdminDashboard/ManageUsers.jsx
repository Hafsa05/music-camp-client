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
			{users.length}
		</>
	);
};

export default ManageUsers;