import SectionHeadings from "../../Components/SectionHeadings/SectionHeadings";
import useClasses from "../../hooks/useClasses/useClasses";
import AllClassesCart from './AllClassesCart';
import PageTitle from '../../Components/PageTitle/PageTitle';

const AllClasses = () => {
	const [classes] = useClasses();
	return (
		<>
			<PageTitle pTitle={'All Classes'}></PageTitle>
			<SectionHeadings heading={"All Music Classes"} subHeading={"Follow Your Passion"}></SectionHeadings>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
				{/* <p>Classes: {classes.length}</p> */}
				{
					classes.map(pClass => <AllClassesCart
						key={pClass._id}
						pClass={pClass}
					></AllClassesCart>)
				}
			</div>

		</>
	);
};

export default AllClasses;