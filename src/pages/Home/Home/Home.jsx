import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div>
			<Helmet>
                <title>Music Camp</title>
            </Helmet>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
		</div>
	);
};

export default Home;