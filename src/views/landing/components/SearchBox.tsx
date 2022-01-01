import { Box, Stack, Input } from "@chakra-ui/react";
import { useState } from "react";
import AutoSearch, { OptionsProps } from "../../../components/AutoSearch";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const SearchBox = () => {
	const [category, setCategory] = useState<OptionsProps | OptionsProps[]>([]);
	const [params, setParams] = useState<string>("");

	const handleCategoryChange = (category: OptionsProps | OptionsProps[]) => {
		setCategory(category);
	};

	const handleQuery = (query: string) => {
		setParams(query);
	};

	return (
		<Stack
			direction={["column", "row"]}
			bg="tomato"
			padding={3}
			alignItems="center"
		>
			<Box width={["100%", "30%"]}>
				<AutoSearch
					options={options}
					isMulti={true}
					placeholder="Choose Category"
					onChange={handleCategoryChange}
					type="category"
					defaultValue={category}
				/>
			</Box>
			<Box flex={1} width="100%">
				<Input
					value={params}
					variant="filled"
					onChange={(e) => handleQuery(e.target.value)}
					placeholder="Search ...."
					background="white"
					_active={{
						background: "white",
					}}
					_focus={{
						background: "white",
					}}
				/>
			</Box>
		</Stack>
	);
};

export default SearchBox;
