import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../pages/providers/AuthProvider';

const useCourseCart = () => {
	const { user } = useContext(AuthContext);

	const { refetch, courseData: courseCart = [] } = useQuery({
		queryKey: ['carts', user?.email],
		queryFn: async () => {
			const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
			return response.json();
		},
	})

	return [courseCart, refetch]

}

export default useCourseCart;