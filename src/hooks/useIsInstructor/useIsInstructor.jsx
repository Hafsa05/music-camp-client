import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../pages/providers/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";



const useIsInstructor = () => {
const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
  
    const {data: isInstructor = false, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res.data);
            return res.data.instructor;
        }
    })
    
    return [isInstructor, isInstructorLoading]
}
export default useIsInstructor;