import { Stack, Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import moment from "moment";

import FaqAnsCard from "../../../components/FaqAnsCard";
import FaqComments from "../../../components/FaqComments";

const FaqDetail = () => {
	return (
		<Stack spacing={8} marginBottom={100}>
			<Stack spacing={4}>
				<Heading textAlign="justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</Heading>
				<Flex
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text fontSize="lg" color="gray.500" fontWeight="bold">
						rajeev rajchal
					</Text>
					<Text fontSize="md" color="gray.500" fontWeight="bold">
						{moment().format("MMMM Do YYYY")}
					</Text>
				</Flex>
				<Box>
					<Text textAlign="justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						porro consequuntur voluptatem magni esse quam omnis dolores est,
						atque ducimus sed! Ipsam, illum consequatur? Blanditiis earum fugiat
						beatae, similique, veniam consequatur aperiam nisi a praesentium
						delectus temporibus corporis! Est nihil officiis nesciunt pariatur.
						Iusto magnam cupiditate tenetur quod, consequuntur nemo? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Eveniet, porro
						consequuntur voluptatem magni esse quam omnis dolores est, atque
						ducimus sed! Ipsam, illum consequatur? Blanditiis earum fugiat
						beatae, similique, veniam consequatur aperiam nisi a praesentium
						delectus temporibus corporis! Est nihil officiis nesciunt pariatur.
						Iusto magnam cupiditate tenetur quod, consequuntur nemo? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Eveniet, porro
						consequuntur voluptatem magni esse quam omnis dolores est, atque
						ducimus sed! Ipsam, illum consequatur? Blanditiis earum fugiat
						beatae, similique, veniam consequatur aperiam nisi a praesentium
						delectus temporibus corporis! Est nihil officiis nesciunt pariatur.
						Iusto magnam cupiditate tenetur quod, consequuntur nemo?
					</Text>
				</Box>
			</Stack>
			<Box marginBottom={8}>
				<Heading as="h3" size="md" textAlign="justify">
					Answers
				</Heading>
				<Grid
					templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
					gap={8}
					marginTop={8}
				>
					<FaqAnsCard />
				</Grid>
			</Box>
			<FaqComments />
		</Stack>
	);
};

export default FaqDetail;
