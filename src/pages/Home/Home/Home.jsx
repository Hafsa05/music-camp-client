import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div>
			<Helmet>
                <title>Music Camp | Home</title>
            </Helmet>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
		</div>
	);
};

export default Home;