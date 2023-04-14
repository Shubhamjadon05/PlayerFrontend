import React from "react";
import MainNav from "../mainNav";
import { useLocation } from "react-router-dom";

const LayOut = ({ children }) => {
	// const location = useLocation();
	const [pathValue, setPathValue] = React.useState(0);

	// React.useEffect(() => {
	// 	setPathValue(3);
	// }, [location]);
	return (
		<>
			<MainNav value={0} />
			{children}
		</>
	);
};

export default LayOut;
