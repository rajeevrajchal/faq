import { useRoutes } from "react-router-dom";
import useRoutesData from "./useRouteData";

const AppRoutes = () => {
	const { routes } = useRoutesData();
	const element = useRoutes(routes);
	return element;
};

export default AppRoutes;
