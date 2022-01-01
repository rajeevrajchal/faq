import { Stack, Grid, GridItem } from "@chakra-ui/react";
import FaqCard from "../../components/FaqCard";
import SearchBox from "./components/SearchBox";

const Landing = () => {
	return (
		<Stack spacing={8} marginBottom={100}>
			<SearchBox />
			<Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]} gap={8}>
				<GridItem width="100%" boxSizing="border-box" flex={1}>
					<FaqCard />
				</GridItem>
				<GridItem width="100%" boxSizing="border-box" flex={1}>
					<FaqCard />
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default Landing;
