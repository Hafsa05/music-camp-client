import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		fetch('classes.json')
			.then(res => res.json())
			.then(data => setClasses(data));
	}, [])
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
			{/* <p>Classes: {classes.length}</p> */}
			{
				classes.map(pClass=> <ClassesCard
					key={pClass._id}
					pClass={pClass}
				></ClassesCard>)
			}

		</div>
	);
};

export default PopularClasses;