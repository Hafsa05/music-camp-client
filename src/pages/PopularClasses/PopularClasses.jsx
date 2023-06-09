import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import SectionHeadings from "../../Components/SectionHeadings/SectionHeadings";
import useClasses from "../../hooks/useClasses/useClasses";

const PopularClasses = () => {
	// const [classes, setClasses] = useState([]);

	// useEffect(() => {
	// 	fetch('http://localhost:5000/classes')
	// 		.then(res => res.json())
	// 		.then(data => setClasses(data));
	// }, [])

	const [classes] = useClasses();
	return (
		<>
			<SectionHeadings heading={"Our Popular Classes"} subHeading={"Follow Your Passion"}></SectionHeadings>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
				{/* <p>Classes: {classes.length}</p> */}
				{
					classes.map(pClass => <ClassCard
						key={pClass._id}
						pClass={pClass}
					></ClassCard>)
				}
			</div>

			{/* <div className="text-center mt-16">
				<button className="btn btn-outline btn-info  border-b-4 border-r-4 mb-5">Show All Classes </button>
			</div> */}
		</>
	);
};

export default PopularClasses;