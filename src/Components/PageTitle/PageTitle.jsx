import { Helmet } from "react-helmet";

const PageTitle = ({ pTitle }) => {
	return (
		<div>
			<Helmet>
				<title>Music Camp | {pTitle} </title>
			</Helmet>
		</div>
	);
};

export default PageTitle;