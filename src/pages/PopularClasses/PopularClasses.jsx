import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import SectionHeadings from "../../Components/SectionHeadings/SectionHeadings";
import useClasses from "../../hooks/useClasses/useClasses";

const PopularClasses = () => {
	
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
		</>
	);
};

export default PopularClasses;