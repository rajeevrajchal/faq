import { Outlet, useNavigate } from "react-router-dom";
import { Center, Stack, Flex, Box, Container, Button } from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";

const BlankLayout = () => {
	const navigate = useNavigate();
	const { signOut, isUserLoggedIn } = useAuth();
	return (
		<Stack position="relative" spacing={8}>
			<Box
				bg="white"
				padding="20px 0"
				position="sticky"
				top={0}
				left={0}
				width="100%"
				boxShadow="base"
			>
				<Container maxW="container.lg">
					<Flex justifyContent="space-between">
						<Button
							colorScheme="teal"
							variant="link"
							onClick={() => navigate("/")}
							textDecoration="none"
							_hover={{
								textDecoration: "none",
							}}
						>
							FAQ
						</Button>
						<Stack direction="row" spacing={8}>
							<Button
								colorScheme="teal"
								variant="link"
								onClick={() => navigate("/create-question")}
								textDecoration="none"
								_hover={{
									textDecoration: "none",
								}}
							>
								Create
							</Button>
							{isUserLoggedIn && (
								<Button
									colorScheme="teal"
									variant="link"
									onClick={() => signOut()}
									textDecoration="none"
									_hover={{
										textDecoration: "none",
									}}
								>
									Logout
								</Button>
							)}
						</Stack>
					</Flex>
				</Container>
			</Box>
			<Center>
				<Container maxW="container.lg">
					<Outlet />
				</Container>
			</Center>
		</Stack>
	);
};

export default BlankLayout;
