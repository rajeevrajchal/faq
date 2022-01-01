import {
	Stack,
	Box,
	Input,
	Button,
	Textarea,
	Center,
	Alert,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const FaqComments = () => {
	const { isUserLoggedIn } = useAuth();
	const navigate = useNavigate();
	if (!isUserLoggedIn) {
		return (
			<Alert status="error" width="100%" borderRadius="md">
				<Center display="flex" flexDir="column" width="100%">
					<AlertTitle mr={2}>Write your ans ? </AlertTitle>
					<AlertDescription margin="10px 0">
						You have to logged in to write your answer.
					</AlertDescription>
					<Button colorScheme="teal" onClick={() => navigate("/login")}>
						Login
					</Button>
				</Center>
			</Alert>
		);
	}
	return (
		<Stack spacing={4} border="1px solid gray" padding="8" borderRadius="lg">
			<Box>
				<Textarea placeholder="Your answer" size="lg" />
			</Box>
			<Stack direction="row" spacing={2}>
				<Button colorScheme="teal" variant="outline">
					Cancel
				</Button>
				<Button colorScheme="teal">Save</Button>
			</Stack>
		</Stack>
	);
};

export default FaqComments;
