import { Box, Button, Input, Stack, Textarea, Heading } from "@chakra-ui/react";
import AutoSearch from "../../components/AutoSearch";

const CreateFaq = () => {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	return (
		<Stack spacing={8}>
			<Box textAlign="center">
				<Heading as="h3" fontSize="md">
					Create Your Question
				</Heading>
			</Box>
			<Stack spacing={8}>
				<Box>
					<Input placeholder="Your question" />
				</Box>
				<Box>
					<AutoSearch
						placeholder="Choose category"
						defaultValue={options[0]}
						options={options}
						type="category"
						isMulti={false}
						onChange={(item: any) => console.log("category choosed", item)}
					/>
				</Box>
				<Box>
					<Textarea placeholder="Description...." size="lg" />
				</Box>
				<Stack direction="row" spacing={2}>
					<Button colorScheme="teal" variant="outline">
						Cancel
					</Button>
					<Button colorScheme="teal">Save</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default CreateFaq;
