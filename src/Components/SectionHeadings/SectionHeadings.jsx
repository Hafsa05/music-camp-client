
const SectionHeadings = ({heading, subHeading}) => {
	return (
		<div className="text-center md:w-4/12 mx-auto my-10 ">
			<h3 className="text-4xl uppercase py-4">{heading}</h3>
			<p className="text-purple-500 italic font-semibold border-y-4 text-xl mb-10">---{subHeading}---</p>

		</div>
	);
};

export default SectionHeadings;