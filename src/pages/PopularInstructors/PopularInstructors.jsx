import { Helmet } from "react-helmet";
import SectionHeadings from "../../Components/SectionHeadings/SectionHeadings";

const PopularInstructors = () => {
	
	return (
		<>
			<Helmet>
				<title>Music Camp | Our Instructors Classes</title>
			</Helmet>
			<SectionHeadings heading={"Our Instructors"} subHeading={"Follow Your Passion"}></SectionHeadings>
		</>

	);
};

export default PopularInstructors;