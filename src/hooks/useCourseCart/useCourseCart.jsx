import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../pages/providers/AuthProvider';

const useCourseCart = () => {
	const { user } = useContext(AuthContext);

	const { refetch, data: courseCart = [] } = useQuery({
		queryKey: ['course-cart', user?.email],
		queryFn: async () => {
			const response = await fetch(`http://localhost:5000/course-cart?email=${user?.email}`)
			return response.json();
		},
	})

	return [courseCart, refetch]

}

export default useCourseCart;