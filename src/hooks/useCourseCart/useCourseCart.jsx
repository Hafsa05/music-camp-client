import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../pages/providers/AuthProvider';

const useCourseCart = () => {
	const { user } = useContext(AuthContext);

	const { refetch, data: courseCart = [] } = useQuery({
		queryKey: ['course-cart', user?.email],
		queryFn: async () => {
			const response = await fetch(`https://music-camp-server.vercel.app/course-cart?email=${user?.email}`)
			return response.json();
		},
	})

	return [courseCart, refetch]

}

export default useCourseCart;