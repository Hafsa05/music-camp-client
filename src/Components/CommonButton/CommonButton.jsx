
const CommonButton = ({ text }) => {
	return (
		<div className="text-center">
			<button className="btn btn-outline btn-info border-b-4 border-r-4"> {text} </button>
		</div>
	);
};

export default CommonButton;