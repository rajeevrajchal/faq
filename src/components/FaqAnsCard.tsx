import { Stack, Box, Text, Center, IconButton, Flex } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useAppData } from "../context/useAppData";
import { useAuth } from "../context/useAuth";
import FaqLogin from "./FaqLogin";
import FaqModal from "./FaqModal";

interface FaqAnsCardProps {
  comment: any;
  faqSlug: string;
}
const FaqAnsCard = ({ comment, faqSlug }: FaqAnsCardProps) => {
  const { isUserLoggedIn } = useAuth();
  const {
    faqReducer: { voteComment },
  } = useAppData();
  const [modal, setModal] = useState<boolean>(false);
  const [voting, setVoting] = useState<{
    key: string;
    id: string | number;
  }>({
    key: "",
    id: "",
  });

  const onVoting = async () => {
    switch (voting.key) {
      case "upvote":
        await voteComment("upvote", comment._id, faqSlug);
        return;
      case "downvote":
        await voteComment("downvote", comment._id, faqSlug);
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
    setModal(false);
  };

  return (
    <>
      <Flex
        direction="row"
        minH="100px"
        maxH="auto"
        alignItems="flex-start"
        justifyitems="flex-start"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box width={"70px"}>
          <Center
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            justifyitems="center"
          >
            <IconButton
              aria-label="Upvote"
              icon={<AiFillCaretUp />}
              variant="ghost"
              onClick={e => handleFaqButtons(e, comment._id, "upvote")}
            />
            <Text fontSize="3xl">{comment.vote || 0}</Text>
            <IconButton
              aria-label="Upvote"
              icon={<AiFillCaretDown />}
              variant="ghost"
              onClick={e => handleFaqButtons(e, comment._id, "downvote")}
            />
          </Center>
        </Box>
        <Stack flex={1} spacing={2} padding="10px">
          <Flex
            direction={["column", "row"]}
            alignItems={["flex-start", "center"]}
            justifyContent="space-between"
          >
            <Text fontSize="md" color="gray.500" fontWeight="bold">
              {comment.user.email}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="bold">
              {moment(comment.createdAt).format("MMMM Do YYYY")}
            </Text>
          </Flex>
          <Text textAlign="justify">{comment.description}</Text>
        </Stack>
      </Flex>
      <FaqModal isOpen={modal} onClose={() => setModal(false)} title={"login"}>
        <FaqLogin onLoginSucess={() => onLoginSucess()} />
      </FaqModal>
    </>
  );
};

export default FaqAnsCard;
