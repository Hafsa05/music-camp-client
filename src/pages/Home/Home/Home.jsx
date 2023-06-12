import { Link } from "react-router-dom";
import CommonButton from "../../../Components/CommonButton/CommonButton";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
	return (
		<div>
			<PageTitle pTitle={'Home'}></PageTitle>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			{/* <PopularInstructors></PopularInstructors> */}
			<Sponsors></Sponsors>
			<Link to='/signup'><CommonButton text={"Register Now"}></CommonButton></Link>
		</div>
	);
};

export default Home;