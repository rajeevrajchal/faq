/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppData } from "../../../context/useAppData";
import { map } from "lodash";

import FaqAnsCard from "../../../components/FaqAnsCard";
import FaqComments from "../../../components/FaqComments";
import moment from "moment";

const FaqDetail = () => {
  const { slug } = useParams();
  const {
    faqReducer: { faqDetail, loading, getFaqByDetail },
  } = useAppData();

  React.useEffect(() => {
    getFaqByDetail(slug);
  }, []);

  if (loading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  return (
    <Stack spacing={8} marginBottom={100}>
      <Stack spacing={4}>
        <Heading textAlign="justify">{faqDetail.title}</Heading>
        <Flex
          direction={["column", "row"]}
          alignItems={["flex-start", "center"]}
          justifyContent="space-between"
        >
          <Text fontSize="lg" color="gray.500" fontWeight="bold">
            {faqDetail.user ? faqDetail.user.email : "n/a"}
          </Text>
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {moment(faqDetail.createdAt).format("MMMM Do YYYY")}
          </Text>
        </Flex>
        <Box>
          <Text textAlign="justify">{faqDetail.description}</Text>
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
          {Boolean(faqDetail.comments && faqDetail.comments.length) ? (
            map(faqDetail.comments, comment => (
              <FaqAnsCard
                comment={comment}
                faqSlug={faqDetail?.slug}
                key={comment._id}
              />
            ))
          ) : (
            <Text>No answer yet.</Text>
          )}
        </Grid>
      </Box>
      <FaqComments faq={faqDetail} />
    </Stack>
  );
};

export default FaqDetail;
