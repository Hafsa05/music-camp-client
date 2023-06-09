import PageTitle from "../../../Components/PageTitle/PageTitle";
import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";

const Home = () => {
	return (
		<div>
			<PageTitle pTitle={'Home'}></PageTitle>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
		</div>
	);
};

export default Home;