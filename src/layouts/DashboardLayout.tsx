import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<Container maxW={["container.sm", "container.lg"]}>
			<Outlet />
		</Container>
	);
};

export default DashboardLayout;
