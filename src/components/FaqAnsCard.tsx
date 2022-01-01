import { Stack, Box, Text, Center, IconButton, Flex } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useAuth } from "../context/useAuth";
import FaqLogin from "./FaqLogin";
import FaqModal from "./FaqModal";

const FaqAnsCard = () => {
	const { isUserLoggedIn } = useAuth();
	const [modal, setModal] = useState<boolean>(false);
	const [voting, setVoting] = useState<{
		key: string;
		id: string | number;
	}>({
		key: "",
		id: "",
	});

	const onVoting = () => {
		switch (voting.key) {
			case "upvote":
				console.log("this is upvote");
				return;
			case "downvote":
				console.log("this is downvote");
				return;
			default:
				return;
		}
	};

	const handleFaqButtons = (e: any, id: string | number, key: string) => {
		e.stopPropagation();
		setVoting({
			key,
			id,
		});
		if (!isUserLoggedIn) {
			setModal(true);
			return;
		} else {
			onVoting();
		}
	};

	const onLoginSucess = () => {
		console.log("the login is sucess");
		setModal(false);
	};

	return (
		<>
			<Flex
				direction="row"
				minH="100px"
				maxH="auto"
				alignItems="flex-start"
				justifyItems="flex-start"
				justifyContent="flex-start"
				cursor="pointer"
			>
				<Box width={"70px"}>
					<Center
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						justifyItems="center"
					>
						<IconButton
							aria-label="Upvote"
							icon={<AiFillCaretUp />}
							variant="ghost"
							onClick={(e) => handleFaqButtons(e, 12, "upvote")}
						/>
						<Text fontSize="3xl">0</Text>
						<IconButton
							aria-label="Upvote"
							icon={<AiFillCaretDown />}
							variant="ghost"
							onClick={(e) => handleFaqButtons(e, 12, "downvote")}
						/>
					</Center>
				</Box>
				<Stack flex={1} spacing={2} padding="10px">
					<Flex
						direction="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Text fontSize="md" color="gray.500" fontWeight="bold">
							kdark
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="bold">
							{moment().format("MMMM Do YYYY")}
						</Text>
					</Flex>
					<Text textAlign="justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
						mollitia voluptatem. Ad itaque temporibus molestias accusantium,
						cumque deleniti quae qui asperiores voluptas dolores eveniet
						voluptates, esse
					</Text>
				</Stack>
			</Flex>
			<FaqModal isOpen={modal} onClose={() => setModal(false)} title={"login"}>
				<FaqLogin onLoginSucess={() => onLoginSucess()} />
			</FaqModal>
		</>
	);
};

export default FaqAnsCard;
